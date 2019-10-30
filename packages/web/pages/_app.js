import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'

import Page from '../src/components/Page'
import withData from '../src/lib/withData'

class Wrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // This exposes query to the user
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, apolloClient, pageProps } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Page>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(Wrapper)
