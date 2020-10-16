import React, { useEffect } from 'react'
import Menu from './menu/Menu'
import Sections from './sections/Sections'
import './Sidebar.scss'
import { AiFillHome } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'
import { AiFillHeart } from 'react-icons/ai'
import { spotifyApi } from '../../../../spotify/spotify'
import { useState } from 'react'
import { RiPlayListFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Sidebar() {

    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        spotifyApi.getUserPlaylists({ offset: 1, limit:10 }).then(dados => setPlaylist(dados.items))
    }, [])

    return (
        <div className="sidebar">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt=""/>
            <Sections title="Biblioteca">
                <Link to="/home" className="sidebar__link">
                    <Menu icon={<AiFillHome/>} text="Home"/>
                </Link>
                <Menu icon={<HiOutlineSearch/>} text="Buscar"/>
                <Link to="/liked" className="sidebar__link">
                    <Menu icon={<AiFillHeart/>} text="Curtidas"/>
                </Link>
            </Sections>
            <Sections title="Playlists">
                {
                    playlist && playlist.map(item => {
                        return <Menu key={item.id} icon={<RiPlayListFill/>} text={item.name}/>
                    })
                }
            </Sections>
        </div>
    )
}

export default Sidebar
