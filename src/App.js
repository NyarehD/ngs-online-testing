import React from "react";
import Nav from "./core/components/Nav/Nav";
import Header from "./core/components/Header/Header";
import FooterCarousel from "./core/components/FooterCarousel/FooterCarousel";
import Content from "./core/components/Content/Content";
import PageFooter from "./core/components/PageFooter/PageFooter";
import Copyright from "./core/components/CopyRight/CopyRight";
import ScrollButton from "./core/components/ScrollButton/ScrollButton";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Content />
      <FooterCarousel />
      <PageFooter />
      <Copyright />
      <ScrollButton />
    </div>
  );
}

export default App;
