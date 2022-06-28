import React from "react";
import Nav from "./core/components/nav/nav";
import Header from "./core/components/header/header";
import FooterCarousel from "./core/components/footer-carousel/footer-carousel";
import PageFooter from "./core/components/page-footer/page-footer";
import Copyright from "./core/components/copy-right/copy-right";
import ScrollButton from "./core/components/scroll-button/scroll-button";
import TeamSingle from "./app/pages/team-single/team-single";


function App() {
  
  return (
    <div className="App">
      <Nav />
      <Header />
      <TeamSingle />
      <FooterCarousel />
      <PageFooter />
      <Copyright />
      <ScrollButton />
    </div>
  );
}

export default App;
