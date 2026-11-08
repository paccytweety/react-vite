import { useState } from 'react'
import Button from './Button'

const Counter = () => {
  const [count, setCount] = useState(0)
  // previousCount è necessario solo se vogliamo mostrare il valore nel render
  const [previousCount, setPreviousCount] = useState(0)

  const updateCounter = (value) => {
    console.warn('New count:', value)
    console.warn('Old count:', count)
    // lo setto solo perche è un valore che voglio mostrare nel render
    // altrimenti mi bastava recuperarlo da count se mi serviva solo in questa funzione
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