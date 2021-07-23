import React from 'react';

function AboutProject() {
      return (
            (<section className="diploma__about">
                  <div className="content">
                        <h2 className="diploma__heading">О проекте</h2>
                        <ul className="diploma__description">
                              <li>
                                    <h3 className="diploma__description_heading">Дипломный проект включал 5 этапов</h3>
                                    <p className="diploma__description_subheading">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                              </li>
                              <li>
                                    <h3 className="diploma__description_heading">На выполнение диплома ушло 5 недель</h3>
                                    <p className="diploma__description_subheading">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                              </li>
                        </ul>
                        <ul className="diploma__time">
                              <li className="diploma__back">
                                    <p className="diploma__back dates">1 неделя</p>
                              </li>
                              <li className="diploma__front">
                                    <p className="diploma__front dates">4 недели</p>
                              </li>
                              <li>
                                    <p className="diploma__front backfront">Back-end</p>
                              </li>
                              <li>
                                    <p className="diploma__front backfront">Front-end</p>
                              </li>
                        </ul>
                  </div >
            </section >)
      );
}
export default AboutProject;