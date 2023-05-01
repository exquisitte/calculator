import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  function Plus(){

  }

  return (
    <>
      <div>
      <div className='count'>
        <div className="num">
          <h1>{count}</h1>
        </div>
        <div className="ariph">
        <div className='PlusNum'>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <div className='MinusNum'>
        <button>-</button>
        </div>
        <div className='multiplyNum'>
        <button>*</button>
        </div>
        <div className='divideNum'>
        <button>/</button>
        </div>
      </div>
    </div>
    </ div>
    </>
  )
}

export default App
