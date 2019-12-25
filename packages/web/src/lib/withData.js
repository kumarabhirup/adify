/* eslint-disable react/prop-types */

import React from 'react'
import Head from 'next/head'
import { ApolloProvider, getDataFromTree } from 'react-apollo'

import initApollo from './initApollo'

export default App =>
  class Apollo extends React.Component {
    static displayName = 'withApollo(App)'

    static async getInitialProps(ctx) {
      const { Component, router } = ctx

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      const apolloState = {}
      const apollo = !process.browser
        ? initApollo(null, ctx.ctx.req.headers.cookie)
        : initApollo()

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      try {
        // Run all GraphQL queries
        await getDataFromTree(
          <ApolloProvider client={apollo}>
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloState={apolloState}
              apolloClient={apollo}
            />
          </ApolloProvider>
        )
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        console.error('Error while running `getDataFromTree`', error)
      }

      if (!process.browser) {
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      apolloState.data = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
      }
    }

    constructor(props) {
      super(props)
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient =
        props.apolloClient || initApollo(props.apolloState.data)
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <App {...this.props} apolloClient={this.apolloClient} />
        </ApolloProvider>
      )
    }
  }
