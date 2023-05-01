import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'

function App() {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('')

  const handleNumberClick = (number) => {
    if (operator === '') {
      setNum1(parseFloat(num1.toString() + number.toString()))
      setResult(parseFloat(num1.toString() + number.toString()))
    } else {
      setNum2(parseFloat(num2.toString() + number.toString()))
      setResult(parseFloat(num2.toString() + number.toString()))
    }
  }
  const handleOperatorClick = (op) => {
    if (operator !== '') {
      calculate()
    }
    setOperator(op)
  }

  const calculate = () => {
    let res
    switch (operator) {
      case '+':
        res = num1 + num2
        break
      case '-':
        res = num1 - num2
        break
      case '*':
        res = num1 * num2
        break
      case '/':
        res = num1 / num2
        break
      default:
        res = 0
        break
    }
    setResult(res)
    setNum1(res)
    setNum2(0)
    setOperator('')
  }

  const clear = () => {
    setResult(0)
    setNum1(0)
    setNum2(0)
    setOperator('')
  }

  return (
    <>
      <div>
      <div className='count'>
        <div className="num">
          <h1>{result}</h1>
        </div>
        <div className="ariph">
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
      </div>
      <div className="btn">
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={() => handleOperatorClick('*')}>*</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <button onClick={() => clear()}>C</button>
      <button onClick={() => calculate()}>=</button>
      </div>
    </div>
    </ div>
    </>
  )
}

export default App
