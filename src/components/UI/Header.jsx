import { useState } from "react"
import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [show, setShow ] = useState();

  const handleButtonToggle = () => {
    return setShow(!show);
  }
  return (
  <header>
    <div className='container'>
      <div className='grid navbar-grid'>
        <div className='logo'>
          <NavLink style={{textDecoration: 'none'}} className='Logo'>
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <nav className={show ? 'menu-mobile' : 'menu-web'}>
          <ul>
            <li> 
              <NavLink style={{textDecoration:'none'
            }} to='/'>home</NavLink></li>
            <li>
              <NavLink style={{textDecoration: 'none'}} to='/contact'>contact</NavLink></li>
            <li>
              <NavLink style={{textDecoration: 'none'}} to='/about'>about</NavLink></li>
            <li>
              <NavLink style={{textDecoration: 'none'}} to='/country'>country</NavLink></li>
          </ul>
        </nav>
        <div className="ham-menu">
          <button onClick={handleButtonToggle}>
             <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header