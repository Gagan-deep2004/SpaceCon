import { useState } from 'react'
import './App.css'
import Imageslider from './components/Imageslider'
import Descriptiontext from './components/Descriptiontext'
import Ourstory from './components/Ourstory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="zone" >
      <Imageslider />
      <Descriptiontext />
      <Ourstory />
    </div>
  )
}

export default App;
