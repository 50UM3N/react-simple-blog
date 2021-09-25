import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">Posty</span>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">
                                Create
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;
