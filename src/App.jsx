/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useLocalStorage, useSessionStorage } from './hooks'
import axios from 'axios';
import Counter from './components/Counter'
import './App.css'
import Users from './components/Users'
import PrimesDemo from './components/PrimesDemo'

const USER_API = 'https://dummyjson.com/users?limit=5'
// const SINGLE_USER_API = 'https://dummyjson.com/users/1'

function App() {
  const [customUsers, setCustomUsers] = useState([])
  const [usernameSession, setUsername] = useSessionStorage('usernameSession', '')
  const [usernameLocal, setUsernameLocal] = useLocalStorage('usernameLocal', '')
   // useEffect(() => {
    //   fetch(USER_API)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setCustomUsers(data.users)
    //     })
    //     .catch((err) => console.error(err))
    // }, [])
  useEffect(() => {
    axios
      .get(USER_API)
      .then((response) => {
        setCustomUsers(response.data.users)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <section id="center">
        <h1>Custom Hook Demo</h1>

        <p>{usernameLocal ? `Username Local: ${usernameLocal}` : 'Not logged in'}</p>
        <button onClick={() => setUsernameLocal('Patty Local')}>Login Local</button>
        <button onClick={() => setUsernameLocal('')}>Logout Local </button>

        <p>{usernameSession ? `Username Session: ${usernameSession}` : 'Not logged in'}</p>
        <button onClick={() => setUsername('Patty Session')}>Login Session</button>
        <button onClick={() => setUsername('')}>Logout Session</button>
        
        <h1>UseMemo Demo</h1>
        <PrimesDemo />
        <h1>Counter</h1>
        <Counter />
        <h1>Filtered Users</h1>
        <Users userList={customUsers}/>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

    </>
  )
}

export default App
