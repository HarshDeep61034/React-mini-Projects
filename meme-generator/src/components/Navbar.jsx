import "./Navbar.css"
import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <>
        <nav>
            <img className="logo" src={logo} alt="" />
            <h1>Meme Generator</h1>
        </nav>
        </>
    )
}