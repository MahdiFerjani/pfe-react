import React from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal"
class Navbar extends React.Component{
  state = {
     modalOpen: false
  }

  handleModalOpen = () => {
     this.setState((prevState) => {
        return{
           modalOpen: !prevState.modalOpen
        }
     })
  }


render() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  $CASH
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/service"
                      >
                        Solutions
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                      
               
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/mmdmd" onClick={this.handleModalOpen} 
                      >
                        Connectez vous?
                      </NavLink>
                      
               
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <LoginModal
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
        />
          </div>
        </div>
      </div>
    </>
  );
};
}

export default Navbar;