

import React from 'react'

function GifList({gifs}) {
    const url = gifs.images.original.url
  return (
    <div>
        <ul>
			<li>
				<img height="200px" src={url} alt="gif" />
			</li>
		</ul>
    </div>
  )
}

export default GifList