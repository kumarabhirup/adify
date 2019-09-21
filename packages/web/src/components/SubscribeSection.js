import React, { useState, useEffect } from 'react'
import { Element } from 'react-scroll'
import Head from 'next/head'

import { subscribeSection } from '../api/meta'
import steinStore, { steinAuthentication } from '../lib/stein'

export default function SubscribeSection(props) {
  const [email, setEmail] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const [isLoadingData, setIsLoadingData] = useState(false)
  const [data, setData] = useState(null)

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchFromStore() {
      setIsError(false)
      setIsLoadingData(true)
      setData(null)
      await steinStore
        .read('Subscriber', { ...steinAuthentication })
        .then(res => {
          setIsLoadingData(false)
          setIsError(false)
          setData(res)
        })
        .catch(() => {
          setIsLoadingData(false)
          setIsError(true)
          setData(null)
        })
    }
    fetchFromStore()
  }, [hasSubmitted])

  const onInputChange = e => {
    setEmail(e.target.value.toLowerCase())
  }

  const subscribeNow = async e => {
    e.preventDefault()

    setIsSubmitting(true)
    setIsError(false)

    await steinStore
      .append('Subscriber', [{ email }], steinAuthentication)
      .then(res => {
        if (res.updatedRange) {
          setIsSubmitting(false)
          setIsError(false)
          setHasSubmitted(true)
          setEmail('')
        } else {
          setIsSubmitting(false)
          setHasSubmitted(false)
          setIsError(true)
        }
      })
      .catch(() => {
        setIsSubmitting(false)
        setIsError(true)
      })
  }

  const renderBelowText = () => {
    if (hasSubmitted && !isError && !isSubmitting) {
      return (
        <>
          Thanks for submitting! You'll get free access to Adify after we{' '}
          launch!
        </>
      )
    }

    if (!hasSubmitted && isError && !isSubmitting) {
      return <>Some error occured while subscribing. Please try again later.</>
    }

    return subscribeSection.belowText
  }

  const renderExcerpt = () => {
    if (isLoadingData) {
      return <>Counting subscribers...</>
    }

    if (isError) {
      return <>Error fetching details.</>
    }

    if (data) {
      const number = 26567 + data.length
      return (
        <>
          <strong style={{ color: 'green' }}>
            {number.toLocaleString()} people
          </strong>{' '}
          subscribed for a <strong>better publishing experience</strong>
        </>
      )
    }
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
                  {renderExcerpt()}
                </p>
                <br />
                <div className="subscribe_form">
                  <form onSubmit={subscribeNow}>
                    <div className="form-row">
                      <div className="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder={subscribeSection.placeholder}
                          onChange={onInputChange}
                          value={email}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="col-sm-3">
                        <div className="subscribe_btn">
                          <button
                            className="btn_2 d-block"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting
                              ? 'Subscribing...'
                              : subscribeSection.button.linkName}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p style={{ fontSize: '15px', float: 'left' }}>
                    {renderBelowText()}
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
