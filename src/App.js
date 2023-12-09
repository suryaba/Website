import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import Skill  from "./Components/Skills/skill";
import Works from "./Components/Works/works";
import Contact from './Components/Contact/contact';
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
