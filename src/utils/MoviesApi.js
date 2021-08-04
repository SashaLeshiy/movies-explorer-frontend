export default class MoviesApi {
    constructor(config) {
        this.url = config.url;
    }
    getMovies() {
        return fetch(`${this.url}`, {
                headers: {
                    authorization: '',
                    'Content-Type': 'application/json'
            }
    })
    .then (this._checkResponse)
    .then(data => {
        return data;
    })

};
_checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

}

const config = {
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    }


export const moviesApi = new MoviesApi(config);