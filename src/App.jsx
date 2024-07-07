import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const stylesheet = {
//   color:"red",
//   fontSize:"35px",
//   border:"1px solid black"
// }

const currentTime =new Date().getHours();

const customcStyle= {
  color: ""
}

let greeting;
if(currentTime<12) {
  greeting="Good morning!"
  customcStyle.color="red"

} else if (currentTime<18) {
  greeting="good afternon!";
  customcStyle.color="green"
} else {
  greeting="good evening!"
  customcStyle.color="blue"
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{textAlign:"center"}}>
      {/* <div className='food-container'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgaXEblJr5qaJQqxifW5Z1CClRG-xslkZAQ&s" alt="" className="foodimg" />
        <img src="https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2560%2Cc_limit/RoastChicken_RECIPE_080420_37993.jpg" alt="" className="foodimg" />
        <img src="https://geekrobocook.com/wp-content/uploads/2021/03/12.-Grilled-Paneer.jpg" alt="" className="foodimg" />
      </div> */}

      
      {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"600px",width:"full",flexDirection: "column"}}>
        <h1 style={{color:"red", fontSize:"44px",}}>Welcome to my React course</h1>
        <h1 style={{marginTop:"0px"}}>Please make it Subscribe</h1>
      </div> */}

 
      {/* <h1 style={stylesheet}>Hello Angela</h1> */}
      <h1 style={customcStyle}>{greeting}</h1>
    </div>
  )
}

export default App


