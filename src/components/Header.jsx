import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="bar row row-between row-wrap-sm">
      <h1>Header</h1>
      <nav className="row">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/store">Store</Link>
      </nav>
    </header>
  )
}

export default Header
