import React from "react";
import logo from "../Image/logo.png";
import { Link } from "react-router-dom";

class Navbarcatalina extends React.Component {
  render() {
    console.log(this.props.links);
    let linkMarkUp = this.props.links.map((item, index) => {
      return (
        <li className="nav-item mr-3">
          <Link to={item.link} className="nav-link">
            {item.label1}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand mr-5 ">
              <img style={{ height: 40, widht: 30 }} src={logo} />
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">{linkMarkUp}</ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbarcatalina;
