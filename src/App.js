// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"; // idk if needed

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { About, Contact, Project } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;


// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
// </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
// </a>
// </header> */}