import { Link, NavLink } from "react-router-dom";
import CartWidget from "../cartwidget/cartwidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="navbar-container">
            <Link to="/">
                <h1>Tienda Kakapo</h1>
            </Link>

            <nav className="navbar-menu">
                <ul>
                    <li>
                        <NavLink to="/categoria/ropa">Ropa</NavLink>
                    </li>

                    <li>
                        <NavLink to="/categoria/accesorios">Accesorios</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;