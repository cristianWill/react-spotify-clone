import React, { useEffect } from 'react'
import { useState } from 'react'
import { spotifyApi } from '../../../../spotify/spotify'
import MusicItem from '../MusicItem/MusicItem'
import './LikedSongs.scss'

function LikedSongs() {

    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        spotifyApi.getMySavedTracks({limit:50}).then(dados => setTracks(dados.items))
    }, [])

    return (
        <div className="likedSongs">
            <div className="likedSongs__title">
                Musicas Curtidas
            </div>
            <div className="likedSongs__title__description">
                Aqui voce irá encontrar todas as musicas que voce gosta, também será possivel selecionar uma musica para que possa tocar. Se divirta!!
            </div>
            <div className="likedSongs__songs">
                {
                    tracks && tracks.map(({track}) => {
                        return <MusicItem   key={track.id} name={track.name} 
                                            album={track.album.images[2].url}
                                            artist={track.artists[0].name}
                                            uri={track.uri}
                                            id={track.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default LikedSongs
