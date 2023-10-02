import './Meme.css'

export default function Meme(){
    return(
        <>
        <form action="#">
         <div className="input">
             <input className='input-box' placeholder='Top Text' type="text" name="" id="" />
             <input className='input-box' placeholder='Bottom Text' type="text" name="" id="" />
             </div>
         <div className="bt"><button className='btn'>Get a new meme image 🖼</button></div>
        </form>
        </>
    )
}