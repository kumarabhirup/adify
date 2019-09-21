import Link from 'next/link'
import { Element } from 'react-scroll'

import { landingSection } from '../api/meta'

export default function LandingSection() {
  return (
    <Element name="landingSection" id="landingSection">
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="banner_img d-none d-lg-block">
                <img src={landingSection.bannerImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h1>{landingSection.title}</h1>
                  <p>{landingSection.excerpt}</p>
                  <Link href={landingSection.button.href}>
                    <a className="btn_2">{landingSection.button.linkName}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Circles that float with animation */}
        <img
          src="https://i.ibb.co/6gwM25V/Ellipse-7.png"
          alt=""
          className="feature_icon_1 custom-animation1"
        />
        <img
          src="https://i.ibb.co/0K9BP7s/Ellipse-9.png"
          alt=""
          className="feature_icon_2 custom-animation2"
        />
        <img
          src="https://i.ibb.co/yf70C6t/Ellipse-1.png"
          alt=""
          className="feature_icon_3 custom-animation3"
        />
        <img
          src="https://i.ibb.co/4KnwsyK/Ellipse-2.png"
          alt=""
          className="feature_icon_4 custom-animation4"
        />
        <img
          src="https://i.ibb.co/2dkP5zj/Ellipse-4.png"
          alt=""
          className="feature_icon_5 custom-animation5"
        />
        <img
          src="https://i.ibb.co/2dkP5zj/Ellipse-4.png"
          alt=""
          className="feature_icon_6 custom-animation6"
        />
      </section>
    </Element>
  )
}
