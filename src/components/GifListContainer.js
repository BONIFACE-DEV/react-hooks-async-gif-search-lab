import React, { useState } from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
    const [imgURL, setImgURL] = useState([]);
    function fetchGifs(query) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(data => {
                const gifs = data.data.slice(0, 3);
                const gifURL = gifs.map(img => img.images.original.url);
                setImgURL(gifURL);
            })
    }
    return (
        <div style={{ display: "flex" }}>
            <GifList images={imgURL} />
            <GifSearch handleSubmit={fetchGifs} />
        </div>
    )
}

export default GifListContainer