import React from "react";
import "../assets/styles/movie-preview.css";

class Preview extends React.Component {
  state = {};

  componentDidMount = () => {
    if (this.props.movie && this.props.movie.TrailerURL) {
      if (this.props.movie.TrailerURL.indexOf(".com") !== -1) {
        this.setState({
          trailerURL: `https://www.youtube.com/embed/${
            this.props.movie.TrailerURL.split("=")[1].split("&")[0]
          }`,
        });
      } else {
        this.setState({
          trailerURL: `https://www.youtube.com/embed/${
            this.props.movie.TrailerURL.split("/").reverse()[0]
          }`,
        });
      }
    }
  };

  render() {
    return (
      <div className="preview-container">
        <div className="trailer">
          <iframe
            title="some"
            src={this.state.trailerURL}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="meta-data">
          <h3>{this.props.movie.EventTitle}</h3>
          <p className="language">{this.props.movie.EventLanguage}</p>
          <div className="badges">
            {this.props.movie.EventGenre.split("|").map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
          <div className="ratings">
            <div>
              <i className="fas fa-thumbs-up" />
            </div>
            <div className="rating-text">
              {this.props.movie.wtsPerc} % <br />
              <span className="muted">{this.props.movie.totalVotes} Votes</span>
            </div>
            <div>
              <i className="fas fa-calendar-alt" />
            </div>
            <div className="rating-text">
              {this.props.movie.ShowDate.split(",")[0]} <br />
              <span className="muted">
                {this.props.movie.ShowDate.split(",")[1]}
              </span>
            </div>
          </div>
          <p className="synopsis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href={`#${this.props.item}`}>Read More</a>
          <div className="watch-section">
            <div className="will-watch">
              <i className="fas fa-thumbs-up" />
              <p>Will Watch</p>
              <p>({this.props.movie.wtsCount})</p>
            </div>
            <div className="maybe">
              <i className="fas fa-question" />
              <p>Maybe</p>
              <p>({this.props.movie.maybeCount})</p>
            </div>
            <div className="wont-watch">
              <i className="fas fa-thumbs-down" />
              <p>Dont Watch</p>
              <p>({this.props.movie.dwtsCount})</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
