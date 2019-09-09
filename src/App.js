import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <section className="app__content">
        <Main></Main>

        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
