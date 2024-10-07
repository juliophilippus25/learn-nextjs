"use client"
import React from 'react'

export default function Calculator() {
    const [number1, setNumber1] = React.useState(0)
    const [number2, setNumber2] = React.useState(0)
    const [result, setResult] = React.useState(0)
  return (
    <div>
        <form>
            <input type="number" placeholder='Input number 1' onChange={(e) => setNumber1(Number(e.target.value))} />
            <p>x</p>
            <input type="number" placeholder='Input number 2' onChange={(e) => setNumber2(Number(e.target.value))} />
            <button type='button' onClick={() => setResult(number1 * number2)}>Multiply</button>
            <p>Result: {result}</p>
        </form>
    </div>
  )
}
