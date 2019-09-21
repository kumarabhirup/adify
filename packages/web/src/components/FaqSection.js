import { Element } from 'react-scroll'
import { faqSection } from '../api/meta'

export default function FaqSection() {
  return (
    <Element name="faqSection" id="faqSection">
      <section
        id="faqSection"
        className="accordion_part padding_bottom padding_top"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_tittle text-center">
                <h2>{faqSection.title}</h2>
                <p>{faqSection.excerpt}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="accordion">
                {faqSection.questions.map(({ question, answer }, i) => (
                  <div className="card" key={i}>
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target={`#collapse${i}`}
                          aria-expanded="true"
                          aria-controls={`collapse${i}`}
                        >
                          {question}
                        </button>
                      </h5>
                    </div>

                    <div
                      id={`collapse${i}`}
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">{answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
