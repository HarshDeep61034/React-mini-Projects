import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
function App() {
  const cardselem = data.map((card)=> {
    return <Card status={card.status} img={card.coverImg} rating={card.stats.rating} numrating={card.stats.reviewCount} country={card.location} descp={card.title} price={card.price} />
  })
  return (
    <>
    <Navbar />
    <Hero />
    <div className="flex-scroll">
      {cardselem}
    </div>
     </>
  )
}

export default App
