import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/bms_logo.png";
import "../assets/styles/home.css";

class Home extends React.Component {
  componentDidMount = () => {
    document.title = "BMS Assignement Home";
  };

  render() {
    return (
      <div>
        <nav className="home-nav">
          <img src={Logo} alt="logo" />
          <h1>SDE 1 - Assignment</h1>
        </nav>

        <ul>
          <li>
            <Link to="/assignment-1">Assignment 1</Link>
          </li>
          <li>
            <Link to="/assignment-2">Assignment 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
