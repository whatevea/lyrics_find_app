import "./style.css"
// import Lyrics from "../lyrics"
export const Card = ({ thumbnail, artist, name, id, onClick }) => {
    return (
        <div className="card-holder" onClick={() => { onClick(name, artist) }}>
            <img src={thumbnail} />
            <label className="artist-name">{artist}</label>
            <label>{name}</label>
        </div>
    )
}
