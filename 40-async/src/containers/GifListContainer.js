import React from 'react'
import { render } from 'react-dom'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphins&api_key=dc6zaTOxFJmzC&rating=g&limit=3")
            .then(resp => resp.json())
            .then(payload => this.setState({ gifs: payload.data }))
    }

    submitHandler = (searchTerm) => {
        // console.log("search term:", searchTerm)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(payload => this.setState({ gifs: payload.data }))
    }

    render() {
        console.log("state: ", this.state.gifs)
        return <GifList submitHandler={this.submitHandler} gifs={this.state.gifs} />
    }
}