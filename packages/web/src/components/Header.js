import Link from 'next/link'
import { Element, Link as ScrollLink } from 'react-scroll'

import { meta, menu } from '../api/meta'

export default function Header() {
  return (
    <Element name="header" id="header">
      <header className="main_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link href="/">
                  <a className="navbar-brand main_logo">
                    <img
                      width="151px"
                      height="40px"
                      src={meta.lightLogo}
                      alt="logo"
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a className="navbar-brand single_page_logo">
                    <img
                      width="151px"
                      height="40px"
                      src={meta.darkLogo}
                      alt="logo"
                    />
                  </a>
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="menu_icon" />
                </button>

                <div
                  className="collapse navbar-collapse main-menu-item"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    {menu.map(({ linkName, to, href, scrollOffset }, i) => (
                      <li className="nav-item" key={i}>
                        <ScrollLink
                          to={to}
                          href={href}
                          spy
                          smooth
                          duration={1000}
                          offset={scrollOffset}
                        >
                          <a className="nav-link">{linkName}</a>
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <ScrollLink
                  to="subscribeSection"
                  spy
                  smooth
                  duration={1000}
                  offset={-120}
                >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="d-none d-sm-block btn_1 home_page_btn" href="#">
                    Get Free Access
                  </a>
                </ScrollLink>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Element>
  )
}
