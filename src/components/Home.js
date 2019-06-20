import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/assignment-1">About</Link>
        </li>
        <li>
          <Link to="/assignment-2">Topics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
