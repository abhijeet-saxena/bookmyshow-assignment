import React from "react";
import logo from "../assets/images/main-logo.png";
import MovieGrid from "./MovieGrid";

class Assignment2 extends React.Component {
  state = {
    languages: [],
    moviesData: []
  };

  componentDidMount = () => {
    document.title = "BMS Assignement 2";

    fetch(
      "https://cors-anywhere.herokuapp.com/https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          languages: data[0],
          moviesData: data[1]
          // moviesData: [data[1]["ET00015426"]]
        });
      })
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
        <main>
          <p style={{ color: "#929292" }}>Applied filters </p>

          {this.state.languages.length === 0 ? (
            "Loading"
          ) : (
            <MovieGrid moviesData={this.state.moviesData} />
          )}
        </main>
      </div>
    );
  }
}

export default Assignment2;
