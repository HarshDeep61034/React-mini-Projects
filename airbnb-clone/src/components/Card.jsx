import "./Card.css"
import star from "../../public/assets/star.png"
export default function Card(props){
    return (
        <>
        <div className="container">
            <div className="image">
                
                <img src={`../../public/assets/${props.img}`} alt="Picture" />
                </div> 
            <div>
                <div className="rating"><img src={star} alt="" />{props.rating} <span className="light">({props.numrating}) • {props.country}</span></div>
                <div className="desc">{props.descp}</div>
                <div className="price"><span className="bold">From {props.price}$</span> / Person</div>
                </div>
        </div>
        </>
    )
}
