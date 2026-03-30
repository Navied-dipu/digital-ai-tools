
import { useState } from 'react'
import './App.css'
import Cart from './component/Cart'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Modals from './component/Modals'
import Navbar from './component/Navber'
import Pricing from './component/Pricing'
import Rating from './component/Rating'
import Steps from './component/Steps'
import CardText from './component/CardText'
import Feature from './component/Feature'
const getModels = async () => {
  const response = await fetch('/data.json')
  return response.json()

}
const modelPromise = getModels()
console.log(modelPromise)

function App() {

  const [isActive, setIsActiveTab] = useState("model")
  const [carts, setCarts] = useState([])
  // console.log(carts)
  return (
    <>
      <Navbar carts={carts} ></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <CardText></CardText>
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 text-black checked:bg-gradient-to-b from-[#4F39F6] to-[#9514FA] checked:text-white" aria-label="Products" defaultChecked onClick={() => setIsActiveTab('model')} />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 text-purple-600 checked:bg-gradient-to-b from-[#4F39F6] to-[#9514FA] checked:text-white" aria-label={`Cart (${carts.length})`} onClick={() => setIsActiveTab('cart')} />

      </div>
{   isActive === 'model' && (
        <Modals modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Modals>
      )}
      {isActive === 'cart' && (
        <Cart carts={carts} setCarts={setCarts}></Cart>
      )}
      <Steps></Steps>
      <Pricing></Pricing>
      <Feature></Feature>
      <Footer></Footer>
    </>
  )
}

export default App
