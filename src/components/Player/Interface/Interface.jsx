import React from 'react'
import './Interface.scss'
import Sidebar from './sidebar/Sidebar'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import LikedSongs from './LikedSongs/LikedSongs'

function Interface() {
    return (
        <div className="interface">
            <Router>
                <Sidebar/>
                <Switch>
                    <Route path="/home">
                        Homeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </Route>
                    <Route path="/liked">
                        <LikedSongs/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Interface
