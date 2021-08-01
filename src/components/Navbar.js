import React, { useContext } from 'react';
import logo from './../img/logo.png'
import { Link } from "react-router-dom";
import { CartContext } from './GlobalCartContext';

const Navbar = () => {
    const {products, totalItem} = useContext(CartContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand"><Link to='/'><img src={logo} alt="" className="img-fluid"/></Link> </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About This Site</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                                </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <ul>
                            <li>
                                
                                <Link to="/cart" ><i className="fas fa-shopping-cart"></i></Link>
                                
                                
                            </li>
                            {/* <p className="count">{products.length}</p> */}
                            <p className="count">{totalItem}</p>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;