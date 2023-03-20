import { useState } from 'react'
import Counter from './components/Counter'
import Handlers from './components/Handlers'
import Login from './components/Login'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
