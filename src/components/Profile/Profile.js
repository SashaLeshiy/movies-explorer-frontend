import React, { useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ setLoggedIn, linkToSignOut, handleChange, setProfileData, profileData }) {
     
      const userInfo = React.useContext(CurrentUserContext);

      useEffect(() => {
            setLoggedIn(true);
            setProfileData({ name: userInfo.name, email: userInfo.email });
      }, []);

      return (
            (<section className="profile">
                  <div className="profile__content content">
                        <h1 className="profile__heading">Привет, {userInfo.name}!</h1>
                        <form className="profile__form">
                        <span className="profile__name">Имя</span>
                        <input type="text" className="profile__input profile__input_name"
                                    name="name" onChange={handleChange}
                                    minLength="2" maxLength="30" value={profileData.name} required />
                        <span className="profile__email">E-Mail</span> 
                        <input type="email" className="profile__input profile__input_email"
                                    name="email" onChange={handleChange}
                                    minLength="2" maxLength="30" value={profileData.email} required />
                        <button type="submit" className="profile__change" >Редактировать</button>           
                        </form>
                        <button onClick={linkToSignOut} className="profile__signout">Выйти из аккаунта</button>
                  </div>
            </section>)
      );
}
export default Profile;