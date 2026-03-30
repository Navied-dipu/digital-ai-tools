
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
const getModels = async () => {
  const response = await fetch('/data.json')
  return response.json()

}
const modelPromise = getModels()
console.log(modelPromise)

function App() {

  // const [isActive, setIsActiveTab] = useState("model")
  const [carts, setCarts] = useState([])
  // console.log(carts)
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      {/* <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Model" defaultChecked onClick={() => setIsActiveTab('model')} />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} onClick={() => setIsActiveTab('cart')} />

      </div> */}
      <Modals modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Modals>
      {/* <Cart></Cart> */}
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App
