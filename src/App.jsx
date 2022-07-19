import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import"./app.scss";
import { useState } from "react";
import Menu from "./components/menu/menu";
import Skills from"./components/skills/skills";
/*import { createContext } from "react";*/

/*export const ThemeContext = createContext(null);*/

function App() {
  /*const [theme, setTheme] = useState("light")*/

  /*const toggleTheme =() => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };*/
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    //<ThemeContext.Provider value= {{ theme, toggleTheme}}>
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
    //</ThemeContext.Provider>
  );
}

export default App;
