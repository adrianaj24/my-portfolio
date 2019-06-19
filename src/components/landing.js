import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://i66.tinypic.com/516atz.jpg"
              alt="avatar"
              className="avatar-img"
              id="profile-pic"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                {" "}
                Javascript | HTML | CSS | Ruby | NodeJS | Express | React | SQL
                | MongoDB | AWS | Rails | Knex | AJAX
              </p>
              <div className="button-container">
                <a
                  href="https://github.com/adrianaj24"
                  target="_blank"
                  className="rounded-btn"
                >
                  {" "}
                  <img
                    className="button-icon"
                    src="http://i64.tinypic.com/10xqzxl.png"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrianaj24/"
                  target="_blank"
                  className="rounded-btn"
                >
                  <img
                    className="button-icon"
                    src="http://i66.tinypic.com/2zsb5ls.png"
                  />
                </a>
                <a
                  href="https://resume.creddle.io/resume/51aw52zsx55"
                  target="_blank"
                  className="rounded-btn"
                >
                  <img
                    className="button-icon"
                    src="http://i66.tinypic.com/2a4pheq.png"
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
        <hr />
      </div>
    );
  }
}
export default Landing;
