import React from 'react';

function error404({ setHeadlessPage }) {
      setHeadlessPage(true);
      return (
            (<section className="error404">
                  <div className="error404__container">
                        <h1 className="error404__heading">404</h1>
                        <p className="error404__desсription">Страница не найдена</p>
                        <button className="error404__back">Назад</button>
                  </div>
            </section>)
      );
}
export default error404;