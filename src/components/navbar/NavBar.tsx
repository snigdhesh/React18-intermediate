
import styles from './NavBar.module.css'

const NavBar = () => {
  
  return (
    <div className={[styles.navbar,"bg","bg-primary"].join(" ")}>
      <h1 className=""><span className="badge">0</span></h1>
      <button className="btn btn-primary btn-lg">login</button>
    </div>
  )
}

export default NavBar