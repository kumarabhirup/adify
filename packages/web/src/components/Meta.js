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

        <title>{meta.title}</title>

        <meta name="description" content={meta.meta_description} />
        <meta name="copyright" content={meta.name} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content={`${meta.name}, ${meta.email}`} />
        <meta name="url" content={meta.domain} />
        <meta name="identifier-URL" content={meta.domain} />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        <meta property="og:title" content={meta.meta_ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.domain} />
        <meta property="og:image" content={meta.coverImage} />
        <meta name="fb:page_id" content={meta.fbPageId} />

        <meta name="twitter:title" content={meta.meta_ogTitle} />
        <meta name="twitter:description" content={meta.meta_description} />
        <meta name="twitter:image" content={meta.coverImage} />
        <meta name="twitter:image:alt" content={meta.meta_ogTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.social} />
        <meta name="twitter:creator" content={meta.social} />
      </Head>
    )
  }
}

export default withRouter(Meta)
