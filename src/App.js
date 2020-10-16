import React, {useEffect, useState} from 'react';
import './App.scss';
import Login from './components/Login/Login';
import Player from './components/Player/Player'
import { getTokenFromUrl, spotifyApi } from './spotify/spotify' 
import { SpotifyProvider } from './contextApi/spotifyContext'
import  Reducer, { InitialState }  from './contextApi/reducer'


function App() {

  // states
  const [token, setToken] = useState(null);
  
  // Use Effect Executa quando a tela é iniciada.
  useEffect(() => {

    if(token) return

    const hash = getTokenFromUrl()

    if(!hash.access_token)
      return;

    const _token = hash.access_token

    setToken(_token)
    spotifyApi.setAccessToken(_token)
    
  }, [token])

  return (
    <div className="App">
      {token ? (
        <SpotifyProvider initialState={InitialState} reducer={Reducer}>
          <Player />
        </SpotifyProvider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
