import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/> {/* <Outlet/> It's a placholder component for child component */}
    </>
  )
}

export default Layout