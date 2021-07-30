import React from 'react';

function Footer({ headlessPage }) {
      return (
            (<footer className={`footer ${headlessPage ? "hidden" : ""}`}>
                  <div className="content">
                        <h3 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                        <div className="footer__copyright">
                              <p className="footer__date">&copy; {new Date().getFullYear()}</p>
                              <ul className="footer__links">
                                    <li><a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
                                    <li><a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://github.com/SashaLeshiy">Github</a></li>
                                    <li><a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/alessandro.leshiy">Facebook</a></li>
                              </ul>
                        </div>
                  </div>
            </footer>)
      );
}
export default Footer;