import React from 'react'

function GifList({ images }) {
    const gifs = images.map((image, index) => {
        return <li key={`image ${index}`}><img src={image} alt='dolphin' /></li>
    })
    return (
        <ul>{gifs}</ul>
    )
}

export default GifList