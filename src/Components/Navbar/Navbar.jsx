import React from 'react'

import { NavLink } from 'react-router-dom'
import adhyayan from '../static/h1.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand w-25" to="/home">
                        <img src={adhyayan} alt="Logo" width="200" height="50" className="d-inline-block align-text-top" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-evenly">
                            <li className="nav-item btn btn-outline-secondary p-1 h-25">
                                <i className="bi bi-house-add fs-5 text-warning"></i>
                                <NavLink className="nav-link active fs-5 text-warning p-0 m-0" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item  btn btn-outline-secondary p-1 h-25">
                                <i className="bi bi-amazon fs-5 text-warning"></i>
                                <NavLink className="nav-link active fs-5 text-warning p-0 m-0" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item  btn btn-outline-secondary p-1 h-25">
                                <i className="bi bi-incognito fs-5 text-warning"></i>
                                <NavLink className="nav-link active fs-5 text-warning p-0 m-0" aria-current="page" to="/admin">Admin</NavLink>
                            </li>
                            <li className="nav-item  btn btn-outline-secondary p-1 h-25">
                                <i className="bi bi-file-earmark-person-fill fs-5 text-warning"></i>
                                <NavLink className="nav-link active fs-5 text-warning p-0 m-0" aria-current="page" to="/career">Career</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar