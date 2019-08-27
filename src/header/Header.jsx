import React from 'react'
import './Header.css'

const NavBar = () => {
  return (
    <div className='glob'>
      <div className='Nav'>
        <img className='logo' src={require('./1.png')} />
        <input className='icon' placeholder="Search or jump to..." />
        <button type="button" className='btn btn-secondary SearchB'>Search</button>
        <span className='menu'><a >Pull requests</a></span>
        <span className='menu'><a >Issues</a></span>
        <span className='menu'><a >Marketplace</a></span>
        <span className='menu'><a >Explore</a></span>
        <div className="dropdown">
  <button type="button" className="btn btn-primary dropdown-toggle drop" data-toggle="dropdown">
    +
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">New repasitory</a>
    <a className="dropdown-item" href="#">Import repasitory</a>
    <a className="dropdown-item" href="#">New gist</a>
    <a className="dropdown-item" href="#">New organization</a>
    <a className="dropdown-item" href="#">New project</a>
  </div>
</div>
      </div>
    </div>
  )
}
export default NavBar