import { showcasingSection } from '../api/meta'

export default function ShowcasingSection() {
  return (
    <section className="client_logo" style={{ opacity: '0.6' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="client_logo_slider owl-carousel d-flex justify-content-between">
              {showcasingSection.map(({ image, alt }, i) => (
                <div className="single_client_logo" key={i}>
                  <img src={image} alt={alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
