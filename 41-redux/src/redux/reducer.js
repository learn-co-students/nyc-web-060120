import { combineReducers } from 'redux'

const defaultState = {
    beys: [],
    user: {}
}

function beyReducer(state = defaultState.beys, action) {

    switch (action.type) {
        case "get_beys":
            console.log("reducer action: ", action)
            return action.payload
        case "fav_bey":
            let newArray = [...state]
            let foundObj = newArray.find(beyObj => beyObj.id === action.payload)
            foundObj.favorite = !foundObj.favorite
            return newArray
        default:
            return state
    }
}


// {beys: []}
const rootReducer = combineReducers({
    beys: beyReducer
})
//combine Reducer just returns our current state object 

export default rootReducer