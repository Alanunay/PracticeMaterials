// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
//import { Hello } from './components/Hello.jsx'
//import { CandidateProfile } from './components/CandidateProfile.jsx'
//import { Testing } from './components/Testing.jsx'
//import { StyledForm } from './components/StyledForm.jsx'
//import { Contactform } from './components/Contactform'
//import { Button } from './components/Button.jsx'
//import MyPlace from './components/MyPlace.jsx'
//import { Product } from './components/Product.jsx'
//import {Welcome} from './components/Welcome.jsx'
import { Greetings } from './components/Greetings.jsx'
//import { UserCard } from './components/UserCard.jsx'
import { CardWrapper } from './components/CardWrapper.jsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    
    
    <div>
      <Greetings  message="Good morning"/>
      {/* <Greetings name="Paul"/>
      <Greetings message="Thanks"/>
      <Greetings /> */}
      {/* <UserCard age="25" city="Bayugan" email="yeur.@email.com"/> */}
      <br/>
      <CardWrapper title="User Profile">
        <p>Bruce wayne</p>
        <p>batman@jl.com</p>
        <button>Edit profile</button>
        </CardWrapper>
      {/* <Welcome name="aj" alias="Omniman"/>
      <Welcome name="mark" alias="Doom"/>
      <Welcome name="park" alias="Spider man"/> */}
      {/* <Product title="Gaming laptop" 
               price={1299.99}
               inStock={true}
               categories={["Electronics", "Computers", "Gaming"]}
               /> */}
      {/* <HelloWithoutJSX/> */}
      {/* <Hello/> */}
      {/* <MyPlace/> */}
      {/* <Button/> */}
      {/* <Contactform/> */}
      {/* <StyledForm/> */}
      {/* <CandidateProfile/> */}
      {/* <Testing/> */}
    </div>
  )
}
export default App
