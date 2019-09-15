import Link from 'next/link'
import { footer, meta, social } from '../api/meta'

export default function Footer() {
  return (
    <footer className="footer_part">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-4 col-lg-4">
            <div className="single_footer_part">
              <Link href="/">
                <a className="footer_logo_iner">
                  <img
                    width="151px"
                    height="40px"
                    src={meta.darkLogo}
                    alt="Adify"
                  />
                </a>
              </Link>
              <p>{footer.excerpt}</p>
            </div>
          </div>

          {footer.links.map(({ sectionName, menu }, i) => (
            <div className="col-sm-4 col-md-4 col-lg-2" key={i}>
              <div className="single_footer_part">
                <h4>{sectionName}</h4>
                <ul className="list-unstyled">
                  {menu.map(({ linkName, href }, j) => (
                    <li key={j}>
                      <Link href={href}>
                        <a>{linkName}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <div className="row">
          <div className="col-lg-8">
            <div className="copyright_text">
              <p>{footer.copyright}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer_icon social_icon">
              <ul className="list-unstyled">
                {social.map(({ name, link }, i) => (
                  <li key={i}>
                    <a
                      href={link}
                      className="single_social_icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fab fa-${name}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
