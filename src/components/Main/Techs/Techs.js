import React from 'react';

function Techs() {
      return (
            (<section className="techs">
                  <div className="content">
                        <h2 className="techs__heading">Технологии</h2>
                        <div className="techs__description">
                              <h3 className="techs__description_heading">7 технологий</h3>
                              <p className="techs__description_subheading">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                        </div>
                        <div className="techs__icons">
                              <button className="techs__button">HTML</button>
                              <button className="techs__button">CSS</button>
                              <button className="techs__button">JS</button>
                              <button className="techs__button">React</button>
                              <button className="techs__button">Git</button>
                              <button className="techs__button">Express.js</button>
                              <button className="techs__button">mongoDB</button>
                        </div>
                  </div>
            </section>)
      );
}
export default Techs;