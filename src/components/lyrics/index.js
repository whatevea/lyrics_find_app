import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLyrics } from "genius-lyrics-api";
const Lyrics = () => {
    const id = useParams();
    const [lyrics, setLyrics] = useState("Loading Lyrics")
    useEffect(() => {
        const options = {
            apiKey: "gmDvpGiOG1pPqQ7RYu3qoV-J9L2dMOu-WT04mLLE1KJN-xzMtU07a445ipr3hZQp",
            id: id,
            optimizeQuery: true
        }
        getLyrics(options).then(lyrics => { setLyrics(lyrics) })
        //get lyrics from api
    },
        [])
    return (
        <div className="lyrics">
            {lyrics}

        </div>
    )
}
export default Lyrics
