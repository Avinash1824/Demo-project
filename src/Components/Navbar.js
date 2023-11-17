import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bgcol px-5">
    <h3 className="navbar-brand">Infonity</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse justify-content-center 
  " id="navbarCenteredExample">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <a className="nav-link active m-2 hov" aria-current="page" href="/#">Courses</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active m-2 hov"  href="/#">Features</a>
        </li>
        
        <li className="nav-item">
        <a className="nav-link active m-2 hov"  href="/#">FAQ's</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active m-2 hov"  href="/#">Contact</a>
        </li>
        <button type="button" className="btn btn-dark btn-rounded m-2">Learn More</button>
        </ul>  
    </div>
</nav>
    </>
  )
}

export default Navbar