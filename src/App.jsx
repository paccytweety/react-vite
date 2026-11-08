/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import Users from './components/Users'

const USER_API = 'https://dummyjson.com/users?limit=5'
// const SINGLE_USER_API = 'https://dummyjson.com/users/1'

function App() {
  const [customUsers, setCustomUsers] = useState([])

  useEffect(() => {
    fetch(USER_API)
      .then((res) => res.json())
      .then((data) => {
        setCustomUsers(data.users)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <section id="center">
        <h1>Get started</h1>
        <Counter />
        <Users userList={customUsers}/>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

    </>
  )
}

export default App
