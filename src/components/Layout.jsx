import Header from './Header'

const Layout = (props) => {
  return (
    <>
    <Header />
    <main className="mainContent">
      {props.children}
    </main>
    <footer>Footer</footer>
    </>
  )
}

export default Layout
