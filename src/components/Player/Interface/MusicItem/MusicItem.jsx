import React from 'react'
import { useSpotifyContext } from '../../../../contextApi/spotifyContext'
import { spotifyApi } from '../../../../spotify/spotify'
import './MusicItem.scss'

function MusicItem({uri, id, artist, album, name}) {

    const [{currentTrack}, dispatch] = useSpotifyContext()

    const playSong = () => {
        spotifyApi.play({
            uris:[uri]
        }).then(dados => {
            console.log(dados)
            getCurrenTrack()
        }
        )
    }
 
    // Obtem musica atual tocando.
    const getCurrenTrack = () => {
        setTimeout(() => {
            spotifyApi.getMyCurrentPlayingTrack().then(dados => {
                dispatch({
                    type: "SET_CURRENT_TRACK",
                    currentTrack: dados
                }) 
            })
        }, 2000);
    }

    const colorStyle = {
        color:id === currentTrack.item.id ? '#00FF38' : '#FFF'
    }

    return (
        <div className="musicItem" onClick={playSong}>
            <img src={album} alt=""></img>
            <span className="musicItem__name" style={colorStyle}>
                {name}
            </span>
            <span className="musicItem__artist" style={colorStyle}>{artist}</span>
        </div>
    )
}

export default MusicItem