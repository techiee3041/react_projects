import { User } from './User';
import './App.css';
import {useState} from "react"

function App() {
  const users = [
    {name: "Doreen", age: 25},
    {name: "Octopus", age: 23},
    {name: "Diamond", age: 28}
  ]
  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true}
  ]

  const [age, setAge] = useState(0)
  const [input, handleInput] = useState("")
  const [showText, setShowText] = useState(true)
  const [color, setColor] = useState("blue")

  const increaseAge = () => {
    setAge(age + 1)
  }
  const decreaseAge = () => {
    setAge(age - 1)
  }
  const handleInputChange = (event) => {
    handleInput(event.target.value)
  }
  return (
    <div className="App">
      {users.map((user) => {
        return <User name={user.name} age={user.age} />
      })}

      {planets.map((planet) => {
        return <Planet name={planet.name} gasPlanet= {planet.isGasPlanet} />
      })}
      <button onClick={decreaseAge}>Decrease</button>
      <p>{age}</p>
      <button onClick={increaseAge}>Increase</button>
      <input type="text" name="name" id="text" onChange={handleInputChange} />{input}
      <button onClick={() => {setShowText(!showText)}}>show/hide</button>
      {showText && <h1>SHOW THIS TEXT</h1>}
      <button onClick={() => {setColor("green")}}>color</button>
      <h1 style={{color: color}}>My name is Doreen</h1>

    </div>
  );
}

const Planet = (props) => {
  return <div>
  {props.gasPlanet && <h1>{props.name}</h1>}
</div>
}

export default App;
