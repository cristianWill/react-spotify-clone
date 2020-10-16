import React, { createContext, useContext, useReducer } from 'react'

const SpotifyContext = createContext()

export const SpotifyProvider = ({reducer, initialState, children}) => (
    <SpotifyContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SpotifyContext.Provider>
)

export const useSpotifyContext = () => useContext(SpotifyContext)