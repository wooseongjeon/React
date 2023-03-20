import { useState } from 'react'
import Counter from './components/Counter'
import Handlers from './components/Handlers'
import Login from './components/Login'
import Menu from './components/Menu'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Timer />
    </div>
  )
}

export default App
