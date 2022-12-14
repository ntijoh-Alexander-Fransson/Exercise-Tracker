import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand m-3">
                ExcerTacker
            </Link>

            <div className="collapse navbar navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">
                            Exercises
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">
                            Create Exercise Log
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/users" className="nav-link">
                            Create User
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}