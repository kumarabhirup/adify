import React from 'react'
import App, { Container } from 'next/app'

import Page from '../src/frontend/components/Page'

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
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}

export default Wrapper
