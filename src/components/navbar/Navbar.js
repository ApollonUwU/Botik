import { useRef } from "react";
import "./nav.css";


const Navbar = () => {
    const navRef = useRef(); //useRef hook

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav"); //responsible for showing or not shoving menu on clicking on 📃 and ❌
    };

    return (
        <header>
            <h3>Botik-official 🤖</h3>
            <nav ref={navRef}>
                <a href="#0">Про нас</a>
                <a href="#1">Чому саме ми?</a>
                <a href="#3">Причини зробити бота</a>
                <a href="#4">Послуги</a>
                <a href="#5">Наші контакти</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    ❌
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                📃
            </button>
        </header>
    );
}

export default Navbar;