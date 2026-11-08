import { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocalStorage, useSessionStorage } from '../hooks'
import Counter from './Counter'
import Users from './Users'
import PrimesDemo from './PrimesDemo'

const USER_API = 'https://dummyjson.com/users?limit=5'
// const SINGLE_USER_API = 'https://dummyjson.com/users/1'

function Home() {
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
        <button className="btn" onClick={() => setUsernameLocal('Patty Local')}>Login Local</button>
        <button className="btn" onClick={() => setUsernameLocal('')}>Logout Local </button>

        <p>{usernameSession ? `Username Session: ${usernameSession}` : 'Not logged in'}</p>
        <button className="btn" onClick={() => setUsername('Patty Session')}>Login Session</button>
        <button className="btn" onClick={() => setUsername('')}>Logout Session</button>

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

export default Home
