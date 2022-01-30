import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Landing />
        <Services />
        <Projects />
      </div>
    </div>
  );
}

export default App;
