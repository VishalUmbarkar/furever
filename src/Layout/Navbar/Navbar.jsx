import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    $(document).scroll(function () {
        $(".navbar").toggleClass("scroll", $(this).scrollTop() > $(".navbar").height());
    });

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top`}>
            <div className="container">
                <NavLink to="/" className={`navbar-brand `}>
                    <img src="/images/furever_logo.jpeg" alt="" className="logo" />
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="active" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/AboutPage" activeClassName="active" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/GalleryPage" activeClassName="active" className="nav-link">
                                Gallery
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/TeamsPage" activeClassName="active" className="nav-link">
                                Teams
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/BlogsPage" activeClassName="active" className="nav-link">
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/DonationPage" activeClassName="active" className="nav-link">
                                Donate
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/AdoptPetPage" activeClassName="active" className="nav-link">
                                Adopt Now
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
