import React from 'react';
import globus from '../../../images/text-logo.svg';

function Promo() {

      return (
            (<section className="promo">
                  <div className="promo__grid content">
                        <div className="promo__description">
                              <h1 className="promo__heading">Учебный проект студента факультета Веб{'\u2011'}разработки.</h1>
                              <p className="promo__subheading">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        </div>
                        <div >
                              <img className="promo__image" src={globus} alt="картинка глобус" />
                        </div>
                        <button className="promo__button">Узнать больше</button>
                  </div>
            </section>)
      );
}
export default Promo;