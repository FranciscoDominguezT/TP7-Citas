import React from "react";
import Link from 'next/link';
import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link href="/pages/quienes-somos">Quienes somos</Link>
                </li>
                <li className="nav-item">
                    <Link href="/pages/reservas">Reservas</Link>
                </li>
                <li className="nav-item">
                    <Link href="/pages/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;