import React from "react";
import Nav from "./Components/NavComponent";
import Header from './Components/HeaderComponent';
import FooterCarousel from './Components/FooterCarousel';
import ContentComponent from "./Components/ContentComponent";
import PageFooterComponent from './Components/PageFooterComponent';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />  
      <ContentComponent />
      <FooterCarousel />
      <PageFooterComponent />
      
    </div>
  );
}

export default App;

// Username - ngsdevelopergroup-admin
// Password - gKPxA2zzdp2x3JykuPCP
