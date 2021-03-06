import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="content-grid" />
          <Grid className="projects-grid">
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  width: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "#black",
                    height: "221px",
                    background:
                      "url(https://tryolabs.com/images/blog/social/react.736da783.png) center / cover",
                    zIndex: 1
                  }}
                >
                  ChattyApp
                </CardTitle>
                <CardText>
                  ChattyApp is a client-side single-page application that allows
                  multiple users to chat with each other. Users are able to set
                  their username and chat in real-time through through the
                  Websocket server.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/adrianaj24/chattyApp"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  width: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "black",
                    height: "221px",
                    background:
                      "url(https://www.techaroha.com/wp-content/uploads/2018/06/BEEVA-nodejs-1200x565.jpg) center / cover"
                  }}
                >
                  FoodNow
                </CardTitle>
                <CardText>
                  Food Now is an web application for a singular restaurant wher
                  a user can order for pick-up. The app stores the user choices
                  on its cart using local storage. Guaranteeing the item will
                  stay on cart even if the browser is closed.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/adrianaj24/foodnow"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  minWidth: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "black",
                    height: "256px",
                    background:
                      "url(https://www.techaroha.com/wp-content/uploads/2018/06/BEEVA-nodejs-1200x565.jpg) center / cover"
                  }}
                >
                  TinyApp
                </CardTitle>
                <CardText>
                  TinyApp is a full stack web application built with Node and
                  Express that allows users to shorten long URLs (à la bit.ly).
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/adrianaj24/tinyApp1"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  minWidth: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "black",
                    height: "223px",
                    background:
                      "url(https://australiansecuritymagazine.com.au/wp-content/uploads/2018/03/Amazon-Web-Services_logo835x396.png) center / cover"
                  }}
                >
                  Haven
                </CardTitle>
                <CardText>
                  Haven is an open source Smart Home app built to automate and
                  control common household processes. The first feature
                  implementation of the app is a video feed from a camera that
                  can be placed anywhere in your home.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/adrianaj24/home-assistant"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  minWidth: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "black",
                    height: "241px",
                    background:
                      "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center / cover"
                  }}
                >
                  Tweeter
                </CardTitle>
                <CardText>
                  Single-page Twitter clone powered by AJAX that helped refine
                  front-end development skills and leverage the asynchronous
                  power of JavaScript
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/adrianaj24/tweeter"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Projects;
