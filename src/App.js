import React from "react";
import Nav from "./core/components/nav/nav";
import Header from "./core/components/header/header";
import FooterCarousel from "./core/components/footer-carousel/footer-carousel";
import Content from "./core/components/content/content";
import PageFooter from "./core/components/page-footer/page-footer";
import Copyright from "./core/components/copy-right/copy-right";
import ScrollButton from "./core/components/scroll-button/scroll-button";
import About from './app/pages/about/about'
import Event from './app/pages/team-list/event/event.jsx'
function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Header />
      <Content />
      <FooterCarousel />
      <PageFooter />
      <Copyright />
      <ScrollButton /> */}
      {/* <About/> */}
      <Event></Event>
    </div>
  );
}

export default App;
