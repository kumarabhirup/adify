import React, { useState, useEffect } from 'react'
import { Element } from 'react-scroll'
import Head from 'next/head'

import { subscribeSection } from '../api/meta'

export default function SubscribeSection(props) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(false)

  const onInputChange = e => {
    setEmail(e.target.value.toLowerCase())
  }

  const subscribeNow = e => {
    e.preventDefault()
  }

  return (
    <Element name="subscribeSection" id="subscribeSection">
      <section
        id="subscribeSection"
        className="subscribe_part padding_bottom padding_top"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
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
                  <form
                    onSubmit={subscribeNow}
                    data-stein-url={`${process.env.ADIFY_STEIN_API_KEY}/Subscriber`}
                  >
                    <div className="form-row">
                      <div className="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder={subscribeSection.placeholder}
                          onChange={onInputChange}
                          value={email}
                        />
                      </div>
                      <div className="col-sm-3">
                        <div className="subscribe_btn">
                          <button className="btn_2 d-block" type="submit">
                            {subscribeSection.button.linkName}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p style={{ fontSize: '15px', float: 'left' }}>
                    {subscribeSection.belowText}
                  </p>
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
      <Head>
        <script src="https://unpkg.com/stein-expedite@0.0.1/dist/index.js" />
      </Head>
    </Element>
  )
}
