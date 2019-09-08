import React, { Component } from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'

import { meta } from '../api/meta'

class Meta extends Component {
  render() {
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link rel="shortcut icon" href="/static/favicon.ico" />

        {/* Ecobit Styles */}
        <link
          rel="stylesheet"
          href="/static/assets/styles/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/static/assets/styles/css/animate.css" />
        <link
          rel="stylesheet"
          href="/static/assets/styles/css/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="/static/assets/styles/css/all.css" />
        <link rel="stylesheet" href="/static/assets/styles/css/flaticon.css" />
        <link
          rel="stylesheet"
          href="/static/assets/styles/css/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="/static/assets/styles/css/magnific-popup.css"
        />
        <link rel="stylesheet" href="/static/assets/styles/css/slick.css" />
        <link
          rel="stylesheet"
          href="/static/assets/styles/compiled/style.css"
        />

        <title>{meta.meta_ogTitle}</title>
      </Head>
    )
  }
}

export default withRouter(Meta)
