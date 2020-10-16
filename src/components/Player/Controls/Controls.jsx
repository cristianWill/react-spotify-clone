import React, { useEffect } from 'react'
import './Controls.scss'
import { spotifyApi } from '../../../spotify/spotify'
import { useSpotifyContext } from '../../../contextApi/spotifyContext'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs';


function Controls() {

    // Obtendo Spotify Context
    const [ { currentTrack, songProgress } , dispatch ] = useSpotifyContext();

    // busca musica atual rodando.
    useEffect(() => {
        getCurrenTrack()
    },[])
    
    // Obtem musica atual tocando.
    const getCurrenTrack = () => {
        setTimeout(() => {
            spotifyApi.getMyCurrentPlayingTrack().then(dados => {
                dispatch({
                    type: "SET_CURRENT_TRACK",
                    currentTrack: dados
                }) 
            })
        }, 500);
    }

    const getImageUrl = () => {
        return currentTrack?.item?.album.images[0].url
    }

    // Proxima musica.
    const nextSong = () => {
        spotifyApi.skipToNext().then(_=> getCurrenTrack())
    }

    const prevSong = () => {
        spotifyApi.skipToPrevious().then(_=> getCurrenTrack())
    }

    const pauseSong = () => {
        spotifyApi.pause().then(_=> getCurrenTrack())
    }

    const playSong = () => {
        spotifyApi.play().then(_=> getCurrenTrack())
    }

    const getSongDuration = () => {
        if(!songProgress) return 0;
        
        let totalTime = currentTrack?.item?.duration_ms

        return  40 * ((songProgress * 100 /  totalTime) / 100)
    }
    
    return (
      <div className="controls">
        <div className="controls__songInformation">
          <img src={getImageUrl()} alt="" />
          <div className="controls__songInformation__name">
            <p>{currentTrack?.item?.name}</p>
            <p>{currentTrack?.item?.album.name}</p>
          </div>
        </div>
        <div className="controls__songControls">
          <IoIosArrowBack
            onClick={prevSong}
            className="controls__songControls__hover"
          />
          <div>
            {currentTrack?.is_playing ? (
              <BsPauseFill className="controls__songControls__hover" onClick={pauseSong}/>
            ) : (
              <BsFillPlayFill className="controls__songControls__hover" onClick={playSong} />
            )}
          </div>
          <IoIosArrowForward
            onClick={nextSong}
            className="controls__songControls__hover"
          />
        </div>
        <div className="controls__progress">
            <div className="controls__progress__total">
            </div>
            <div className="controls__progress__status" style={{width:getSongDuration() + 'vw'}}>
            </div>
        </div>
      </div>
    );
}

export default Controls
