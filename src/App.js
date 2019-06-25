import React from "react";
import "./App.css";
import Landing from "./components/landing",
import {
  Layout,
  Header,
  Navigation,
  Content,
  Footer,
  FooterSection
} from "react-mdl";
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
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
            <Landing/>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer size="mini">
            <FooterSection
              type="center"
              logo="Copyright © Adriana Jimenez 2019"
            />
          </Footer>
        </Layout>
      </div>
    </div>
  );
}

export default App;
