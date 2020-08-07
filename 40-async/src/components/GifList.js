import React, { Fragment } from 'react'
import GifSearch from './GifSearch'

function GifList(props) {

    const gifs = props.gifs.map(gif => <li><img key={gif.id} alt={gif.name} src={gif.images.original.url} /></li>)
    return (
        <div>
            <GifSearch submitHandler={props.submitHandler} />
            <ul>
                {gifs}
            </ul>
        </div>
    )
}

export default GifList