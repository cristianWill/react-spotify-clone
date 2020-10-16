import React, { useEffect } from 'react'
import { useSpotifyContext } from '../../contextApi/spotifyContext'
import { spotifyApi } from '../../spotify/spotify'
import Controls from './Controls/Controls'
import Interface from './Interface/Interface'
import './Player.scss'

function Player() {

    const[, dispatch] = useSpotifyContext()

    useEffect(() => {
        spotifyApi.getMe().then(({id}) => dispatch({
            type:"SET_ID",
            id
        }))
    }, [dispatch])


    return (
        <div className="player">
            <Interface/>
            <Controls/>
        </div>
    )
}

export default Player
