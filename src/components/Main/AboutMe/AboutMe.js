import React from 'react';
import myPhoto from '../../../images/my_photo.JPG';
import arrow from '../../../images/arrow.svg';

function AboutMe() {
      return (
            (<section className="about">
                  <div className="about__content content">
                        <h2 className="about__heading">Студент</h2>
                        <div className="about__me">
                              <img className="about__photo" src={myPhoto} alt="фотография студента" />
                              <h3 className="about__name">Александр</h3>
                              <p className="about__career">Фронтенд-разработчик, 46 лет</p>
                              <p className="about__aboutMe">Я родился и живу в Москве. У меня есть жена и сын.
                                    Я люблю слушать музыку, футбол, гонять на велике и бегать.
                                    Недавно начал кодить. С 2018 года занимался администрированием сайтов на Битрикс.
                                    После того, как закончил курсы по Веб-разработке планирую написать пару приложений для портфолио
                                    и найти удаленную работу.</p>
                              <ul className="about__links">
                                    <li><a className="about__link" target="_blank" rel="noopener noreferrer" href="https://github.com/SashaLeshiy">Github</a></li>
                                    <li><a className="about__link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">Facebook</a></li>
                              </ul>
                        </div>
                        <div className="about__portfolio">
                              <h3 className="about__portfolio_heading">Портфолио</h3>
                              <ul className="about__portfolio_links">
                                    <li className="about__portfolio_link">
                                         <a className="about__portfolio_out" target="_blank" rel="noopener noreferrer" 
                                         href="https://vacanza-russo.netlify.app/">Статичный сайт</a>
                                         <img className="about__portfolio_arrow" src={arrow} alt="стрелка" />
                                         <p className="about__portfolio_description">Адаптивная верстка/БЭМ/flex/grid</p>
                                    </li>
                                    <li className="about__portfolio_link">
                                         <a className="about__portfolio_out" target="_blank" rel="noopener noreferrer" 
                                         href="https://zomlesh.nomoredomains.club">Адаптивный сайт</a>
                                         <img className="about__portfolio_arrow" src={arrow} alt="стрелка" />
                                         <p className="about__portfolio_description">'Инстаграм'</p>
                                    </li>
                                    <li className="about__portfolio_link last-link">
                                         <a className="about__portfolio_out" target="_blank" rel="noopener noreferrer" 
                                         href="https://zomlesh.nomoredomains.monster">Одностраничное приложение</a>
                                         <img className="about__portfolio_arrow" src={arrow} alt="стрелка" />
                                         <p className="about__portfolio_description">Дипломная работа</p>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </section>)
      );
}
export default AboutMe;
