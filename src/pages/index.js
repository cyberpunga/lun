import React from "react";

import Intro from "../components/Intro";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SaveButton from "../components/SaveButton";

import "../styles.css";

export default function IndexPage() {
  return (
    <React.Fragment>
      <Intro />
      <div id="cover" style={{ margin: "24px 0" }}>
        <Header />
        <Main />
        <Footer />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SaveButton />
      </div>
    </React.Fragment>
  );
}
