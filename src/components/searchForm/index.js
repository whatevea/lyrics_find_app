import Button from '../button';
import './style.css'
import Logo from '../logo';
import LoadingGif from './loading.gif'
import { useState, useRef } from 'react';
import axios from 'axios';
import { Card } from '../Card';
import getLyrics from 'genius-lyrics-api/lib/getLyrics';
const SearchForm = () => {
    const thumbnail = "https://images.genius.com/79f02182908d92294cc34c464df67a4b.300x300x1.jpg"
    const [lyrics, setLyrics] = useState("")
    const [results, setResults] = useState([])
    const [searching, setSearching] = useState(false)
    const inputRef = useRef()
    const renderLyrics = (title, artist) => {
        console.log("called render lyrics")
        const options = {
            apiKey: "gmDvpGiOG1pPqQ7RYu3qoV-J9L2dMOu-WT04mLLE1KJN-xzMtU07a445ipr3hZQp",
            title: title,
            artist: artist,
            optimizeQuery: true
        }
        getLyrics(options).then(lyrics => {
            setResults([])
            setLyrics(lyrics)
        })
    }
    const onBtnClick = () => {
        console.log("button was clicked")
        setSearching(true)
        setLyrics("");
        let query = inputRef.current.value;
        inputRef.current.value = "Loading";
        console.log(process.env)
        //send axios
        axios.get(`https://api.genius.com/search?q=${query}&access_token=gmDvpGiOG1pPqQ7RYu3qoV-J9L2dMOu-WT04mLLE1KJN-xzMtU07a445ipr3hZQp`).then(

            data => {
                let array = data.data.response.hits
                setSearching(false)
                setResults(array)
                console.log(array)
            }
        )
    }
    return (
        <div className='main'>
            <div className='container'>
                <Logo />
                <div className='form'>
                    <label> Type any song/artist name:</label>
                    <div className='form-holder'>
                        <input ref={inputRef} className='textField' placeholder='eg. One Direction ' name="songname" />
                        {!searching &&
                            (
                                <Button onClick={onBtnClick} />
                            )}

                    </div>
                </div>
                <div className='loadingGif'>
                    {

                        searching && (
                            <img src={LoadingGif} />
                        )


                    }

                </div>
                <div className='lyrics'>
                    {lyrics && (
                        <pre>{lyrics}</pre>
                    )}
                </div>

                <div className='results'>
                    {results.length > 0 && results.map((item, key) => {
                        return (
                            <Card key={key} thumbnail={item.result.header_image_thumbnail_url} id={item.result.id} name={item.result.full_title} artist={item.result.artist_names} onClick={renderLyrics} />
                        )
                    })
                    }
                </div>

            </div>



        </div>
    )
}
export default SearchForm;