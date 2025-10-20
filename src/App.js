import React from "react";
import { AllRoutes } from "./routes/AllRoutes";
import ScrollToTop from "./components/utils/ScrollToTop";
import { Footer, Header } from "./components/layouts";

function App() {
  return (
    <div className="App">
        <Header />
      <AllRoutes />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
