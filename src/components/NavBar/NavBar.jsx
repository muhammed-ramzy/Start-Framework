import Styles from "./NavBar.module.css"
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg my-main-bg-color py-4 fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand text-uppercase text-white fw-bolder fs-2" to="">Start Framework</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link fs-6 text-white text-uppercase fw-bold rounded-3" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link fs-6 text-white text-uppercase fw-bold rounded-3" aria-current="page" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link fs-6 text-white text-uppercase fw-bold rounded-3" aria-current="page" to="/contact">Contact</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}