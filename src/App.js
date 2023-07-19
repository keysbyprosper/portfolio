import "./App.css";
import Header from "./components/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Skill from "./components/skills/Skills";
import Work from "./components/work/Work";



function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <Home />
        <About/>
        <Skill/>
        <Work />
        <Contact/>
      </main>
    </div>
  );
}

export default App;
