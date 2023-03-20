import React, {useState} from 'react'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button size="small" />
      <Button size="medium" />
      <Button size="large green" />
      <Button size="red" />
      <Button size="gold" />
      
    </div>
  )
}

export default App
