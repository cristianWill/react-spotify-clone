import React from 'react'
import { loginUrl } from '../../spotify/spotify'
import './Login.scss'

function Login() {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt=""/>
            <a href={loginUrl}>LOGAR COM CONTA SPOTIFY </a>
        </div>
    )
}

export default Login
