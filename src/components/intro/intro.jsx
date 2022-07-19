import "./intro.scss"
import Profile from "../../images/profilepic.jpg"
import Arrow from "../../images/downarrow.png"

export default function intro() {
  return (
    <div className="intro" id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src={Profile} alt="Placeholder img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Michael Phan</h1>
          <h3>Recent graduate of U of A's FullStack Coding Bootcamp</h3>
          <a href="#portfolio">
          <img src= {Arrow} alt="Arrow connecting to portfolio section" />
          <h3 className="h3">Proceed to next section!</h3>
        </a>
        </div>

      </div>
    </div>
  )
}
