import { useEffect, useRef, useState } from 'react'
import Button from './Button'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [previousCount, setPreviousCount] = useState(0)

  const updateCounter = (value) => {
    setPreviousCount(count)
    setCount(value)
  }

  const increment = () => updateCounter(count + 1)
  const decrement = () => updateCounter(Math.max(0, count - 1))
  const reset = () => updateCounter(0)
  const setCustomValue = (value) => updateCounter(value)
  return (
    <>
      <div className="counter">
        Count is {count} (precedente: {previousCount})
      </div>
      <Button cta="SET to 5" onClick={setCustomValue} value={5} />
      <Button cta="RESET" onClick={reset} />
      <Button cta="Increment" onClick={increment} />
      <Button cta="Decrement" onClick={decrement} />
    </>
  )
}

export default Counter