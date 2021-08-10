import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';

function Profile({ setLoggedIn,
      linkToSignOut,
      handleChange,
      setProfileData,
      profileData,
      errors,
      isValid,
      setCurrentUser,
      setProfileMessage,
      profileMessage,
      setIsValid
}) {
      const [errorMessage, setErrorMessage] = useState(false);
      
      function patchUserData(newProfile) {
            mainApi.setUser(newProfile)
            .then((res) => {
                  setCurrentUser({ name: res.name, email: res.email, id: res.id });
                  setErrorMessage(false);
                  setProfileMessage('Данные аккаунта изменены');
                  setIsValid(false);
            })
            .catch((err) => {
                  setErrorMessage(true);
                  setProfileMessage('Что-то пошло не так...')
                  console.log(err);
                });
      }
      const userInfo = React.useContext(CurrentUserContext);

      function handleSubmit(event) {
            event.preventDefault();
            patchUserData(profileData);
      }

      useEffect(() => {
            setLoggedIn(true);
            setProfileData({ name: userInfo.name, email: userInfo.email });
            setProfileMessage('');
      }, []);

      return (
            (<section className="profile">
                  <div className="profile__content content">
                        <h1 className="profile__heading">Привет, {userInfo.name}!</h1>
                        <form className="profile__form" onSubmit={handleSubmit} noValidate>
                              <span className="profile__name">Имя</span>
                              <input type="text" className="profile__input profile__input_name"
                                    name="name" onChange={handleChange}
                                    minLength="2" maxLength="30" value={profileData.name} required />
                              <span className="profile__error">{errors.name}</span>
                              <span className="profile__span"></span>
                              <span className="profile__email">E-Mail</span>
                              <input type="email" className="profile__input profile__input_email"
                                    name="email" onChange={handleChange}
                                    minLength="2" maxLength="30" value={profileData.email} required />
                              <span className="profile__error">{errors.email}</span>
                              <span className={`profile__error profile__message ${errorMessage ? 'profile__message_error' : ''}`}>
                                    {profileMessage}</span>
                              {isValid ?
                              <button type="submit" className="profile__submit" >Редактировать</button>
                              :
                              <button type="submit" className="profile__submit profile__submit_unactive" disabled >Редактировать</button>
                              }
                        </form>
                        <button onClick={linkToSignOut} className="profile__signout">Выйти из аккаунта</button>
                  </div>
            </section>)
      );
}
export default Profile;