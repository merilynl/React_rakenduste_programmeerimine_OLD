import { useState } from "react"
import Toggle from "./components/Toggle"
import Show from "./components/Show"
import Maths from "./components/Maths"
import MyForm from "./components/MyForm"
import PropDrilling from "./components/PropDrilling"
import Context from "./components/Context"
import Fetching from "./components/Fetching"
import "./App.css"

function App() {
  const [show, setShow] = useState(true)
  const toggleShow = () => setShow(previousShow => !previousShow)
  return (
    <div className="Container">
      <h1>Merilyn</h1>
      <Fetching />
      <PropDrilling />
      <Context />
      <MyForm />
      <Maths />
      <Show show={show} />
      <Toggle toggleShow={toggleShow} />
    </div>
  )
}

export default App
//LEFT AT END OF 27.09
