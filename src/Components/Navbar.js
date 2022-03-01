import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <span className=" fs-3 fw-bold">
            <i className="fas fa-heartbeat fa-2x"></i>{" "}
            <span>Find Your Doctor!</span>
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <span class="navbar-text">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-lg-0 ">
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/About" style={{ textDecoration: "none" }}>
                    About Us
                  </Link>
                </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/Specialization" style={{ textDecoration: "none" }}>
                    Specialization
                  </Link>
                </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/DisplayDoctor" style={{ textDecoration: "none" }}>
                    Doctor's Info
                  </Link>
                </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/DisplayMedical" style={{ textDecoration: "none" }}>
                    Medical Stores
                  </Link>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
