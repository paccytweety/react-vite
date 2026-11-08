import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="bar row row-between row-wrap-sm">
      <h1>Header</h1>
      <nav className="row">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/store">Store</Link>
        <Link className="link" to="/articles/1">Articles 1</Link>
        <Link className="link" to="/articles/2">Articles 2</Link>
      </nav>
    </header>
  )
}

export default Header
