import SpotifyWebApi from 'spotify-web-api-js'

const redirectUrl = 'http://localhost:3000/'
const clientId = '0a79aea57d0d4392b2a8b1a7d1c8e7ca'
const authEndpoint = 'https://accounts.spotify.com/authorize'

const scopes = [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar do player do usuario.
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative"
]

export const getTokenFromUrl = () =>
  window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {});

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`

export const spotifyApi = new SpotifyWebApi()