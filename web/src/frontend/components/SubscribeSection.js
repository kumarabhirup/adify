import { subscribeSection } from '../api/meta'

export default function SubscribeSection(props) {
  return (
    <section className="subscribe_part padding_bottom" {...props}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="subscribe_part_text text-center">
              <h2>{subscribeSection.title}</h2>
              <p style={{ marginTop: '-10px', fontSize: '20px' }}>
                {subscribeSection.excerpt}
              </p>
              <br />
              <div className="subscribe_form">
                <form action="#">
                  <div className="form-row">
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={subscribeSection.placeholder}
                      />
                    </div>
                    <div className="col-sm-3">
                      <div className="subscribe_btn">
                        <div className="btn_2 d-block">
                          {subscribeSection.button.linkName}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="img/animate_icon/Ellipse_5.png"
        alt=""
        className="feature_icon_2 custom-animation2"
      />
    </section>
  )
}
