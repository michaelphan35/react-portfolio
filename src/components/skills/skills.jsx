import "./skills.scss";
// import {init} from "ityped";
// import {useEffect, useRef} from "react";
import Typewriter from "typewriter-effect";
//import Typing from "react-typing-animation";
//import Typist from "react-typist";
//import Typed from "react-typed";
import Arrow from "../../images/downarrow.png"
export default function Skills() {
  /*const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["HTML", "Javascript"],
    });
  }, []);*/

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        <span>
          <ul>
            <li>
              <Typewriter 
           
                options={{ 
                strings:["JavaScript", "HTML", "CSS", "React", "MySql", "MangoDB", "API's", "Node", "MERN"],
                autoStart:true,
                delay:75,
                loop:true
                }} 
              /> 
            </li>
            <li>
              <Typewriter 
           
                options={{ 
                strings:["HTML", "CSS", "React", "MySql", "MangoDB", "API's", "Node", "MERN", "JavaScript"],
                autoStart:true,
                delay:75,
                loop:true
                }} 
              /> 
            </li>
            <li>
              <Typewriter 
           
                options={{ 
                strings:["CSS", "React", "MySql", "MangoDB", "API's", "Node", "MERN", "JavaScript", "HTML",],
                autoStart:true,
                delay:75,
                loop:true
                }} 
              /> 
            </li>
            <li>
              <Typewriter 
           
                options={{ 
                strings:["React", "MySql", "MangoDB", "API's", "Node", "MERN", "JavaScript", "HTML", "CSS", ],
                autoStart:true,
                delay:75,
                loop:true
                }} 
              /> 
            </li>
            <li>
              <Typewriter 
           
                options={{ 
                strings:["MySql", "MangoDB", "API's", "Node", "MERN", "JavaScript", "HTML", "CSS", "React",],
                autoStart:true,
                delay:75,
                loop:true
                }} 
              /> 
            </li>
            <li>
              <Typewriter 
           
                options={{ 
                strings:["MangoDB", "API's", "Node", "MERN", "JavaScript", "HTML", "CSS", "React", "MySql"],
                autoStart:true,
                delay:75,
                loop:true
                }} 
              /> 
            </li>
            <li>
              <Typewriter 
           
                options={{ 
                strings:["API's", "Node", "MERN", "JavaScript", "HTML", "CSS", "React", "MySql", "MangoDB"],
                autoStart:true,
                delay:75,
                loop:true
                }} 
              /> 
            </li>
            <li>
              <Typewriter 
           
                options={{ 
                strings:["MERN", "JavaScript", "HTML", "CSS", "React", "MySql", "MangoDB", "API's", "Node"],
                autoStart:true,
                delay:75,
                loop:true
                }} 
              /> 
            </li>
          </ul>
        </span>
      </div>
      <div className="transition">
          <a href="#contact"><img src={Arrow} alt="*" /></a>
          <h3>Proceed to next section</h3>
        </div>
    </div>
  )
}

