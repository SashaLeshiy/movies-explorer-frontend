import React from 'react';

function Footer() {
      return (
            (<footer className="footer">
                  <div className="content">
                        <h3 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                        <div className="footer__copyright">
                              <p className="footer__date">&copy; {new Date().getFullYear()}</p>
                              <ul className="footer__links">
                                    <li><a className="footer__link" href="Яндекс.Практикум">Яндекс.Практикум</a></li>
                                    <li><a className="footer__link" href="https://github.com/SashaLeshiy">Github</a></li>
                                    <li><a className="footer__link" href="#">Facebook</a></li>
                              </ul>
                        </div>
                  </div>
            </footer>)
      );
}
export default Footer;