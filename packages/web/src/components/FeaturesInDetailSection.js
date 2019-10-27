import React from 'react'
import { Element, Link as ScrollLink } from 'react-scroll'

import { featuresInDetailSection } from '../api/meta'
import useIsMobile from './hooks/useIsMobile'

/**
 * @name FeaturesInDetailSection
 *
 * @description The logic written below is flawed and only works to show 2 features.
 *              Update appreiciated.
 */
export default function FeaturesInDetailSection() {
  const isMobile = useIsMobile()

  return (
    <Element name="featuresInDetailSection" id="featuresInDetailSection">
      {featuresInDetailSection.map(
        ({ iconImage, image, embed, title, excerpt, button }, i) => {
          const sectionClass = i % 2 === 0 ? `section_padding` : `right_time`
          const padding =
            featuresInDetailSection.length - 1 === i && `padding_bottom`

          return (
            <section className={`about_us ${sectionClass} ${padding}`} key={i}>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  {!isMobile && sectionClass === 'section_padding' && (
                    <div className="col-md-6 col-lg-6">
                      <div className="learning_img">
                        {image && <img src={image} alt="" />}
                        {embed && embed}
                      </div>
                    </div>
                  )}

                  <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                      <img src={iconImage} alt="" />
                      <h2>{title}</h2>
                      <p>{excerpt}</p>
                      {button && (
                        <ScrollLink
                          to={button.to}
                          spy
                          smooth
                          duration={1000}
                          offset={button.scrollOffset}
                        >
                          <a className="btn_2" href={button.href}>
                            {button.linkName}
                          </a>
                        </ScrollLink>
                      )}
                    </div>
                  </div>

                  {!isMobile && sectionClass === 'right_time' && (
                    <div className="col-md-6 col-lg-6">
                      <div className="learning_img">
                        {image && <img src={image} alt="" />}
                        {embed && embed}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <img
                src="https://i.ibb.co/2dkP5zj/Ellipse-4.png"
                alt=""
                className="feature_icon_1 custom-animation1"
              />
            </section>
          )
        }
      )}
    </Element>
  )
}
