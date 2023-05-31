import { NavLink } from "react-router-dom"
export const Header = () => {
    const token = localStorage.getItem("token")
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to = '/' className="nav-link active" aria-current="page" href="#">
                  Home
                </NavLink>
              </li>
              {token && <li className="nav-item dropdown">
                <NavLink to = '/manufacture'
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Manufacture
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to= '/transport' className="dropdown-item" >
                      Transporter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to= '/manufacture' className="dropdown-item" >
                      Manufacture
                    </NavLink>
                  </li>
                </ul>
              </li>}
              {!token && <li className="nav-item">
                <NavLink to = '/register' className="nav-link" >
                  Register
                </NavLink>
              </li>}
              {token && <li className="nav-item">
                <NavLink to = '/login' className="nav-link" onClick = {() => {localStorage.clear()}} >
                  Logout
                </NavLink>
              </li>}
              {!token && <li className="nav-item">
                <NavLink to = '/login' className="nav-link" >
                  Login
                </NavLink>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
