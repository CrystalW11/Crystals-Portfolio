import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Works />
          <Experience />
          <Tech />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <p
            style={{
              margin: "0 auto", // Center horizontally
              padding: "20px", // Optional: add padding around the text
              textAlign: "center", // Center the text itself inside the <p>
              maxWidth: "80%", // Optional: limit the width to keep it from stretching across the whole screen
              fontSize: "16px", // Optional: set a specific font size
              lineHeight: "1.5", // Optional: adjust line height for readability
            }}
          >
            {" "}
            If this does not work from you android phone, download the Firefox
            browser app.
          </p>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
