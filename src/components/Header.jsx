import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary ">
        <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/Dictionary_Favicon.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top rounded"/>
            &nbsp;Dictionary
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            Feedback
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
