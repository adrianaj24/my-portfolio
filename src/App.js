import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-colour"
            title={<a href="/">Adriana Jimenez</a>}
            scroll
          >
            <Navigation>
              <Link to="/projects">Projects just adding some text</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
