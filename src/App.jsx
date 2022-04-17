import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";
import Work from "./components/work/Work";
import { useEffect } from "react";
import { storedTheme } from "../src/themes";

function App() {
  useEffect(() => {
    storedTheme();
  }, []);
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Landing />
        <Services />
        <Work />
      </div>
    </div>
  );
}

export default App;
