import "./navbar.scss"
import { AccountBox, ContactMail } from "@material-ui/icons"

export default function navbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Michael Phan</a>
          <div className="itemContainer">
            <AccountBox className="icon"/>
            <span>+1 480 745 0146</span>
          </div>
          <div className="itemContainer">
            <ContactMail className="icon"/>
            <span>michaelphan35@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
