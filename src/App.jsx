import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import"./app.scss";
import { useState } from "react";
import Menu from "./components/menu/menu";
import Skills from"./components/skills/skills";

function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
