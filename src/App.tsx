import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>React + TypeScript Demo</h1>
      <p>This demo is for dependency upgrade & agent testing.</p>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default App
