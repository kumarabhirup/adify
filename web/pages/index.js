import Head from 'next/head'

import { meta } from '../src/frontend/api/meta'
import Header from '../src/frontend/components/Header'
import LandingSection from '../src/frontend/components/LandingSection'
import SubscribeSection from '../src/frontend/components/SubscribeSection'
import FeaturesSection from '../src/frontend/components/FeaturesSection'
import FeaturesInDetailSection from '../src/frontend/components/FeaturesInDetailSection'
import FaqSection from '../src/frontend/components/FaqSection'
import Footer from '../src/frontend/components/Footer'
import useIsMobile from '../src/frontend/components/hooks/useIsMobile'

export default function HomePage() {
  const isMobile = useIsMobile(991)

  console.log(process.env.GA_TRACKING_ID) // env does not work. issue 👉 https://github.com/zeit/next.js/issues/7320
  return (
    <>
      <Head>
        <title>{meta.meta_ogTitle}</title>
      </Head>
      <>
        <Header />
        <LandingSection />
        <FeaturesSection />
        <FeaturesInDetailSection />
        <SubscribeSection
          style={(() => {
            if (isMobile) return { marginTop: '70px' }
          })()}
        />
        <FaqSection />
        <Footer />
      </>
    </>
  )
}
