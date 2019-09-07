import Link from 'next/link'
import { meta, menu } from '../api/meta'

export default function Header() {
  return (
    <header className="main_menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand main_logo">
                  <img src={meta.lightLogo} alt="logo" />
                </a>
              </Link>
              <Link href="/">
                <a className="navbar-brand single_page_logo">
                  <img src={meta.darkLogo} alt="logo" />
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
                <span className="menu_icon"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu-item"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  {menu.map(({ linkName, href }) => (
                    <li className="nav-item">
                      <Link href={href}>
                        <a className="nav-link">{linkName}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/signup">
                <a className="d-none d-sm-block btn_1 home_page_btn">Sign Up</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
