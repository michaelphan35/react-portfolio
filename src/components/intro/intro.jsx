import "./intro.scss"
import Man from "../../images/man.jpg"
import Arrow from "../../images/downarrow.png"

export default function intro() {
  return (
    <div className="intro" id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src={Man} alt="Placeholder img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Michael Phan</h1>
          <h3>Recent graduate of U of A's FullStack Coding Bootcamp</h3>
        </div>
        <a href="#portfolio">
          <img src= {Arrow} alt="Arrow connecting to portfolio section" />
        </a>
      </div>
    </div>
  )
}
