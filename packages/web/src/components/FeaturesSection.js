import { Element } from 'react-scroll'
import { featuresSection } from '../api/meta'

export default function FeaturesSection() {
  return (
    <Element name="featuresSection" id="featuresSection">
      <section id="featuresSection" className="use_sasu padding_top">
        <div className="container">
          <div className="row justify-content-center">
            {featuresSection.map(({ image, title, excerpt }, i) => (
              <div className="col-lg-4 col-sm-6" key={i}>
                <div className="single_feature">
                  <div className="single_feature_part">
                    <img src={image} alt="" />
                    <h4>{title}</h4>
                    <p>{excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="https://i.ibb.co/yf70C6t/Ellipse-1.png"
          alt=""
          className="feature_icon_1 custom-animation1"
        />
      </section>
    </Element>
  )
}
