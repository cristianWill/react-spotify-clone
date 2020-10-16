export const InitialState = {
    currentTrack:null,
    songProgress: 0,
    id: null
}

const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_TRACK":
            return {
                ...state,
                currentTrack: action.currentTrack,
                songProgress: action.currentTrack.progress_ms
            };
        
        case "SET_ID":
            return {
                ...state,
                id: action.id
            }
        default:
            return state

    }
}

export default Reducer