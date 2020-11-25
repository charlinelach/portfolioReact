import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} style="background-color: #DAAD86" />
          <Route exact path="/about" component={About} style="background-color: #DAAD86" />
          <Route exact path="/project" component={Project} style="background-color: #B1A296" />
          <Route exact path="/contact" component={Contact} style="background-color: #7395AE" />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;