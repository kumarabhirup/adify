import Head from 'next/head'

import { meta } from '../src/frontend/api/meta'
import Header from '../src/frontend/components/Header'
import LandingSection from '../src/frontend/components/LandingSection'
import ShowcasingSection from '../src/frontend/components/ShowcasingSection'
import SubscribeSection from '../src/frontend/components/SubscribeSection'

export default function HomePage() {
  console.log(process.env.GA_TRACKING_ID) // env does not work. issue 👉 https://github.com/zeit/next.js/issues/7320

  return (
    <>
      <Head>
        <title>{meta.meta_ogTitle}</title>
      </Head>
      <>
        <Header />
        <LandingSection />
        <SubscribeSection />
        <ShowcasingSection />
      </>
    </>
  )
}
