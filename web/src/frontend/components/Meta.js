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

        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async
        ></script>

        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
          var OneSignal = window.OneSignal || [];
          OneSignal.push(function() {
            OneSignal.init({
              appId: "${process.env.ONESIGNAL_ID}"
            });
          });
        `,
          }}
        ></script>

        <title>{meta.meta_ogTitle}</title>
      </Head>
    )
  }
}

export default withRouter(Meta)
