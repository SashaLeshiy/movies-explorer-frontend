import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from "../Header/Header";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  const history = useHistory();

  function linkToMovies() {
    history.push('/movies');
  }

  return (
    <div className="page">
      <Header linkToMovies={linkToMovies} />
      <Switch >
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin" >
          <Login />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/" component={Main}
        >
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
