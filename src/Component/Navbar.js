import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a style={{fontWeight:'800', marginLeft:"20px"}} className="navbar-brand" href="/">Dronacharya</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link className="nav-link active" aria-current="page" to="/" style={{fontWeight:"700"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Achivement" style={{fontWeight:"700"}}>Achivement</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About" style={{fontWeight:"700"}}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Services" style={{fontWeight:"700"}}>Services</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link active" aria-current="page" to="/Award" style={{fontWeight:"700"}}>Award</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Contact" style={{fontWeight:"700"}}>Contact</Link>
        </li>
        <button type="button" class="btn btn-warning" style={{marginLeft:'10px', borderRadius:"10px", marginRight:'70px'}}  > Log in</button>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
