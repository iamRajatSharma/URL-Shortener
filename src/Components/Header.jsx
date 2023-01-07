import { Link } from "react-router-dom";

function Header() {

    const ls = localStorage.getItem("users")
    const loggedIn = JSON.parse(ls)

    function logout() {
        localStorage.clear()
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">URL-Shortener-App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/add">Create New Shortener URL</Link>
                            </li>
                        </ul>
                        {
                            !loggedIn ?
                                <ul className="navbar-nav" style={{ position: "absolute", right: " 10px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/signin">Sign In</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/signup">Sign Up</Link>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav" style={{ position: "absolute", right: " 10px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" onClick={() => { logout() }} to="/signin">Logout</Link>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;