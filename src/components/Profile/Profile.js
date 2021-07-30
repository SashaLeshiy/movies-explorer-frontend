import React from 'react';

function Profile() {
      return (
            (<section className="profile">
                  <div className="profile__content content">
                        <h1 className="profile__heading">Привет, Александр!</h1>
                        <ul className="profile__account">
                              <li className="profile__name">
                                    <p>Имя</p>
                                    <p>Александр</p>
                              </li>
                              <li className="profile__email">
                                    <p>E-Mail</p>
                                    <p>zomlesh@yandex.ru</p>
                              </li>
                        </ul>
                        <ul className="profile__menu" >
                              <li>
                                    <button className="profile__change">Редактировать</button>
                              </li>
                              <li>
                                    <button className="profile__signout">Выйти из аккаунта</button>
                              </li>
                        </ul>
                  </div>
            </section>)
      );
}
export default Profile;