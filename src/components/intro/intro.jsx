import "./intro.scss"

export default function intro() {
  return (
    <div className="intro" id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="images/man.jpg" alt="*" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Michael Phan</h1>
          <h3>Recent graduate of U of A's FullStack Coding Bootcamp</h3>
        </div>
        <a href="#portfolio">
          <img src="images/downarrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}
