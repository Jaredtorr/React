import React from "react";
import './Header.css'
import Logo from '../../../assets/Logo.webp'

function Header () {
     return (
     <>
     <header className="header-productos-increibles">
                <div className="logo-container">
                    <img src={Logo} alt="logo" className="logo" />
                    <h1 className="name-title">Productos Increibles</h1>
                </div>
                <div className="buttons-container">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Registrarse</button>
                </div>
            </header>
     </>
     );

}
export default Header;
