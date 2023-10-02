import "./Hero.css"
import grid from "../../public/assets/grid.png"
export default function Hero(){
    return(
        <>
        <div className="container">
            <img className="hero-img" src={grid} />
            </div>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </>
    )
}



