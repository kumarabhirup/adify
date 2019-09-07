import Head from 'next/head'
import { meta } from '../src/frontend/api/meta'

export default function HomePage() {
  console.log(process.env.GA_TRACKING_ID) // env does not work. issue 👉 https://github.com/zeit/next.js/issues/7320

  return (
    <>
      <Head>
        <title>{meta.meta_ogTitle}</title>
      </Head>
      <header className="main_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand main_logo" href="index.html">
                  <img src={meta.image} alt="logo" />
                </a>
                <a className="navbar-brand single_page_logo" href="index.html">
                  <img src={meta.image} alt="logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="menu_icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse main-menu-item"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="features.html">
                        features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pricing.html">
                        pricing
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="blog.html"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="blog.html">
                          blog
                        </a>
                        <a className="dropdown-item" href="single-blog.html">
                          Single blog
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="blog.html"
                        id="navbarDropdown1"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        pages
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown1"
                      >
                        <a className="dropdown-item" href="elements.html">
                          Elements
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <a
                  href="/trial"
                  className="d-none d-sm-block btn_1 home_page_btn"
                >
                  Sign Up
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="banner_img d-none d-lg-block">
                <img src="img/banner_img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h1>Building Networks For People</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <a href="/trial" className="btn_2">
                    try for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="img/animate_icon/Ellipse_7.png"
          alt=""
          className="feature_icon_1 custom-animation1"
        />
        <img
          src="img/animate_icon/Ellipse_8.png"
          alt=""
          className="feature_icon_2 custom-animation2"
        />
        <img
          src="img/animate_icon/Ellipse_1.png"
          alt=""
          className="feature_icon_3 custom-animation3"
        />
        <img
          src="img/animate_icon/Ellipse_2.png"
          alt=""
          className="feature_icon_4 custom-animation4"
        />
        <img
          src="img/animate_icon/Ellipse_3.png"
          alt=""
          className="feature_icon_5 custom-animation5"
        />
        <img
          src="img/animate_icon/Ellipse_4.png"
          alt=""
          className="feature_icon_6 custom-animation6"
        />
      </section>
    </>
  )
}
