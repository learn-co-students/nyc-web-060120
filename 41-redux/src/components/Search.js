import React from 'react'

function Search(props) {

    return (
        <form>
            <input type="text" value={props.searchValue} onChange={props.changeHandler} placeholder="search" />
        </form>
    )
}

export default Search