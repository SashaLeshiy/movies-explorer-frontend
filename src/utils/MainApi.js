export const BASE_URL = 'https://api.zomlesh.nomoredomains.monster';

const checkResponse = (response) => {
  return response.ok ? response.json() :
    Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const register = ({email, password, name}) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then(res => checkResponse(res));
  };

  export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password })
    })
      .then(res => checkResponse(res));
  };

  export const getUserInfo = () => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/users/me`, {
      headers: {
        authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
      })  
      .then(res => checkResponse(res))
      .then(res => {
            return res;
      })
  }

  export const setUser = (userInfo) => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userInfo.name,
      email: userInfo.email
    }),
    })
    .then(res => checkResponse(res))
  }

  export const setMovie = (props) => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        movieId: props.movieId,
        country: props.country || 'not specified',
        director: props.director || 'not specified',
        year: props.year,
        description: props.description || 'not specified',
        image: `https://api.nomoreparties.co${props.image.url}`,
        trailer: props.trailer || 'https://www.youtube.com/',
        nameEN: props.nameEN || 'not specified',
        nameRU: props.nameRU || 'not specified', 
        thumbnail: `https://api.nomoreparties.co${props.thumbnail}`, 
        duration: props.duration,
    }),
    })
    .then(res => checkResponse(res));
  }

  export const getSavedMovie = () => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/movies`, {
      headers: {
        authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
      })  
      .then(res => checkResponse(res))
      .then(res => {
            return res;
      })
  }

  export const deleteMovie = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
      })
      .then(res => checkResponse(res))
  }