import { Link } from "react-router-dom";
//import { auth } from "../config/firebase";
//import { useAuthState } from "react-firebase-hooks/auth";
import img1 from "../assets/VC_logo.png";

export const Navbar = () => {
  //const [user] = useAuthState(auth);
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light"
        style={{ backgroundColor: "#00B9FC" }}
      >
        <div className="container-fluid justify-content-between">
          <div className="d-flex">
            <a
              className="navbar-brand me-2 mb-1 d-flex align-items-center"
              href="#"
            >
              <Link to="/" className="navbar-brand">
                <img
                  src={img1}
                  height="35"
                  alt="MDB Logo"
                  loading="lazy"
                  style={{ marginTop: "2px" }}
                />
              </Link>
            </a>
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link
                className="text-dark nav-link d-sm-flex align-items-sm-center fs-4"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-3 me-lg-1">
              <span>
                <>
                  <Link
                    to="/addMember"
                    className="text-dark nav-link d-sm-flex align-items-sm-center fs-4"
                  >
                    Add Member
                  </Link>
                </>
                {/*<Link
                    to="/login"
                    className="text-light nav-link d-sm-flex align-items-sm-center fs-4"
                  >
                    Sign In
  </Link>*/}
              </span>
            </li>
            <li className="nav-item me-3 me-lg-1">
              <Link
                to="/user"
                className="nav-link d-sm-flex align-items-sm-center text-dark fs-4"
              >
                <img
                  src={"https://static.thenounproject.com/png/363633-200.png"}
                  className="rounded-circle"
                  height="30"
                  loading="lazy"
                />
                &nbsp;
                <button className="nav-item nav-link fs-5 text-dark">
                  Log Out
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
