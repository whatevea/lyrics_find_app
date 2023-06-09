import image from './icon.png'
import logo from "./logo.png"
import './style.css'
const Logo = () => {

    return (
        <div className='mainDiv'>
            {/* <img className='logoImage' src={image} /> */}
            <img className="logoText" src={logo} />
        </div>
    )


}
export default Logo