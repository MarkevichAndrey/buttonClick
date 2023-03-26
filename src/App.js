import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
  const incrementCount = () => {
    setCount(count + 1)
  }
  const texts = [
    'Press me',
    'Click',
    'Clack me, please',
    'Click-Clack',
    'Hit me',
  ]

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClik={incrementCount} text={text} key={index} />
      })}
    </div>
  )
}

export default App
