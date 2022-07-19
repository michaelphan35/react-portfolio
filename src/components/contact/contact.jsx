import "./contact.scss";
import PDF from "../../documents/resume.pdf";
import Resume from "../../images/resume_ss.png";
import { AccountBox, ContactMail, Twitter, Instagram, LinkedIn} from "@material-ui/icons";

export default function contact() {
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <a href={PDF} target="_blank" rel="noreferrer"><h2>Resume:</h2></a>
        <a href={PDF} target="_blank" rel="noreferrer"><img src={Resume} alt="" /></a>
      </div>
      <div className="center">
        <h2>Please contact me using the following:</h2>
      <div className="itemContainer">
            <a href="/">
              <AccountBox className="icon"/>
              <span>+1 480 745 0146</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="mailto:michaelphan35@gmail.com">
            <ContactMail className="icon"/>
            <span>michaelphan35@gmail.com</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://twitter.com/Michael70506728" target="_blank" rel="noreferrer">
              <Twitter className="icon"/>
              <span>@Michael70506728</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.instagram.com/asiaticphan/" target="_blank" rel="noreferrer">
              <Instagram className="icon"/>
              <span>@asiaticphan</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/michael-phan-b61903aa/" target="_blank" rel="noreferrer">
              <LinkedIn className="icon"/>
              <span>Michael Phan</span>
            </a>
          </div>
      </div>
    </div>
  )
}
