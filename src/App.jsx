import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Store from './components/Store'
import Layout from './components/Layout'
import Articles from './components/Articles'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/articles/:id" element={<Articles />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
