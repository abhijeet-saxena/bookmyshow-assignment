import React from "react";
import logo from "../assets/main-logo.png";

class Assignment2 extends React.Component {
  componentDidMount = () => {
    console.log(1);
    fetch("http://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container-2">
        <nav>
          <img src={logo} height="40px" width="150px" alt="logo" />
          <div className="nav-left">
            <button className="green-btn">COMING SOON</button>
            <button className="gray-btn">NOW SHOWING</button>
          </div>
          <div className="nav-right">
            <button>
              Popular <i className="fas fa-chevron-down" />
            </button>
            <button>
              English <i className="fas fa-chevron-down" />
            </button>
            <button>
              All Genres <i className="fas fa-chevron-down" />
            </button>
          </div>
          <i className="fas fa-times" />
        </nav>
        <main>This will be main content</main>
      </div>
    );
  }
}

export default Assignment2;
