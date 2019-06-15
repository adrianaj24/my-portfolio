import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {" "}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png) center / cover"
              }}
            >
              ChattyApp
            </CardTitle>
            <CardText>
              ChattyApp is a client-side single-page application that allows
              multiple users to chat with each other. Users are able to set
              their username and chat in real-time through through the Websocket
              server.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png) center / cover"
              }}
            >
              FoodNow
            </CardTitle>
            <CardText>
              Food Now is an web application for a singular restaurant wher a
              user can order for pick-up. The app stores the user choices on its
              cart using local storage. Guaranteeing the item will stay on cart
              even if the browser is closed. The user can edit each item
              individually (increase/decrease quantity, and delete) and all
              changes are reflect on total price amount.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Mongo</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is NodeJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Mongo</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
          <Tab>NodeJS</Tab>
          <Tab>AWS</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
