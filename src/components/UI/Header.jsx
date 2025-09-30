import { NavLink } from "react-router-dom"


const Header = () => {
  return (
  <header>
    <div className='container'>
      <div className='grid navbar-grid'>
        <div className='logo'>
          <NavLink className='Logo' style={{textDecoration: 'none'}}>
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <nav className=''>
          <ul>
            <li> 
              <NavLink style={{textDecoration:'none'
            }} to='/'>home</NavLink></li>
            <li>
              <NavLink style={{textDecoration: 'none'}}>contact</NavLink></li>
            <li>
              <NavLink style={{textDecoration: 'none'}}>about</NavLink></li>
            <li>
              <NavLink style={{textDecoration: 'none'}}>country</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header