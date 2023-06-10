import Button from '../button';
import './style.css'
import Logo from '../logo';
import LoadingGif from './loading.gif'
import { useState, useRef } from 'react';
import axios from 'axios';
const SearchForm = () => {
    const thumbnail = "https://images.genius.com/79f02182908d92294cc34c464df67a4b.300x300x1.jpg"
    const id = 12312
    let artist_names = "The Script"

    let full_title = "The Man Who Can't Be Moved by The Script"
    const [searching, setSearching] = useState(false)
    const inputRef = useRef()
    const onBtnClick = () => {
        console.log("button was clicked")
        setSearching(true)
        let query = inputRef.current.value;
        inputRef.current.value = "Loading";
        console.log(process.env)
        //send axios
        axios.get(`https://api.genius.com/search?q=${query}&access_token=gmDvpGiOG1pPqQ7RYu3qoV-J9L2dMOu-WT04mLLE1KJN-xzMtU07a445ipr3hZQp`).then(

            data => {
                let array = data.data.response.hits
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
            </div>



        </div>
    )
}
export default SearchForm;