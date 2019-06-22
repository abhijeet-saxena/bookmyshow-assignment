import React from "react";
import "../grid-styles.css";

class MovieGrid extends React.Component {
  state = {
    movies: []
  };

  componentDidMount = () => {
    // console.log(this.props.moviesData);
    this.setState({
      movies: Object.values(this.props.moviesData).map(movie => ({
        EventTitle: movie.EventTitle,
        EventCode: movie.EventCode,
        ShowDate: movie.ShowDate,
        EventGenre: movie.EventGenre,
        EventLanguage: movie.EventLanguage,
        TrailerURL: movie.TrailerURL,
        wtsCount: movie.wtsCount,
        dwtsCount: movie.dwtsCount,
        maybeCount: movie.maybeCount,
        totalVotes: movie.totalVotes,
        wtsPerc: movie.wtsPerc
      }))
    });
  };

  handleClick = e => {
    let clickedItem = "";
    if (e.target.classList.contains("box-inner")) {
      clickedItem = e.target.parentElement;
    } else if (
      e.target.classList.contains("show-date") ||
      e.target.classList.contains("fa-play-circle") ||
      e.target.classList.contains("ratings")
    ) {
      clickedItem = e.target.parentElement.parentElement;
    } else if (
      e.target.classList.contains("fa-thumbs-up") ||
      e.target.classList.contains("votes")
    ) {
      clickedItem = e.target.parentElement.parentElement.parentElement;
    } else return;

    const clickedItemID = clickedItem.id;

    let columns =
      Math.floor(
        window.innerWidth / clickedItem.getBoundingClientRect().width
      ) || 1;
    let targetElem = document.getElementById(
      Math.floor(clickedItemID / columns) * columns
    );
    if (document.getElementById("preview")) {
      document
        .getElementById("movies-grid")
        .removeChild(document.getElementById("preview"));
    }

    let p = document.createElement("div");
    p.classList.add("preview");
    setTimeout(() => {
      p.style.height = "100px";
      p.style.opacity = 1;
    }, 0);
    p.id = "preview";
    document.getElementById("movies-grid").insertBefore(p, targetElem);
  };

  render() {
    return (
      <div className="movies-grid" id="movies-grid" onClick={this.handleClick}>
        {this.state.movies.map((item, index) => {
          return (
            <div className="box" id={index} key={item.EventCode}>
              <div
                style={{
                  backgroundImage: `url('https://in.bmscdn.com/events/moviecard/${
                    item.EventCode
                  }.jpg')`
                }}
                className="box-inner"
              >
                <span className="show-date">{item.ShowDate.split(",")[0]}</span>

                <i className="far fa-play-circle" />

                <span className="ratings">
                  <i className="fas fa-thumbs-up" /> {item.wtsPerc} %
                  <span className="votes"> {item.totalVotes} votes</span>
                </span>

                <span className="title">{item.EventTitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieGrid;
{
  /* <p style={{ color: "#929292" }}>Applied filters </p> */
}
