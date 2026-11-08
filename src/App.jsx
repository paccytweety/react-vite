import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Store from './components/Store'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  )
}

export default App
