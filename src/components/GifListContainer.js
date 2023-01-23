import React, { useEffect, useState } from 'react'
import GifList from "./GifList";
import GifSearch from "./GifSearch"

function GifListContainer() {


    const [gifs, setGifs] = useState([]);
    const [APIData, setAPIData] = useState("");

    useEffect(() => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${APIData}&api_key=rQu3NRUbvOi2ZnNYq9Tx44sDnsePxvkO&rating=g`)
        .then((response) => response.json())
        .then((data) => {
          const firstThreeGifs = data.data.slice(0, 3);
          setGifs(firstThreeGifs);
        })
    },[APIData])

    function handleSubmit(e) {
      setAPIData(e)
    }

    
  return (
    <div className='container'>
      <div className='row'>
        <div>
          <GifSearch handleSubmit={handleSubmit}/>
        </div>
        <div className='col'>
        {gifs.map((gif) => (
            <GifList gifs={gif} key={gif.id} />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default GifListContainer