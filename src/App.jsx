import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Landing />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
