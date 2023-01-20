

import React, { useState } from 'react'

function GifSearch({ handleSubmit }) {
    const [search, setSearch] = useState('');
    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleSearch(event) {
        event.preventDefault();
        setSearch('');
        handleSubmit(search)
    }

    return (
        <form onSubmit={handleSearch}>
            <input type='text' value={search} onChange={handleChange} required></input>
            <button>Find Gifs</button>
        </form>
    )
}

export default GifSearch