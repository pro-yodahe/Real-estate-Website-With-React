import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Compunice/Companies";
import Residencies from "./components/Residencies/Residencies.jsx";
import Value from "./components/Value/Value.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
       <Companies/>
      <Residencies/>
      <Value />
      <Contact />
      <GetStarted />
      <Footer /> 
    </div>
  );
}

export default App;
