import { useRef } from "react";
import "../styles/main.css";


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
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