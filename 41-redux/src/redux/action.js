

export const getBeys = () => {
    return function (dispatch) {
        fetch("http://localhost:4000/beyArray")
            .then(resp => resp.json())
            .then(data => dispatch({ type: "get_beys", payload: data }))
    }
}
export const favBey = (id) => {
    return { type: "fav_bey", payload: id }
}
