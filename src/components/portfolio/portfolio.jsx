import "./portfolio.scss";
import Social from "../../images/social-api.png";
import Spotify from "../../images/Capture1.JPG";
import Commerce from "../../images/e-commerce-back-end.png";
import Password from "../../images/password-generator.jpg";
import WDS from "../../images/web-dev-social.png";
import Arrow from "../../images/downarrow.png"

export default function portfolio() {
  return (
    <div className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Password Generator</li>
          <li className="active">Web Dev Social</li>
          <li className="active">Spotify Music Search</li>
          <li className="active">Social API</li>
          <li className="active">E-Commerce</li>
        </ul>
        <div className="container">
          <div className="item">
            <a href="https://michaelphan35.github.io/password-generator/" target="_blank" rel="noreferrer noopener"><img src={Password} alt=""/></a>
            <h3><a href="https://github.com/michaelphan35/password-generator" target="_blank" rel="noreferrer noopener">Password Generator</a></h3>
          </div>
          <div className="item">
            <a href="https://guarded-atoll-65920.herokuapp.com/" target="_blank" rel="noreferrer noopener"><img src={WDS} alt=""/></a>
            <h3><a href="https://github.com/michaelphan35/web-dev-social" target="_blank" rel="noreferrer noopener">Web Dev Social</a></h3>
          </div>
          <div className="item">
            <a href="https://aqueous-bayou-14461.herokuapp.com" target="_blank" rel="noreferrer noopener"><img src={Spotify} alt=""/></a>
            <h3><a href="https://github.com/michaelphan35/project-mern" target="_blank" rel="noreferrer noopener">Spotify Music Search</a></h3>
          </div>
          <div className="item">
            <a href="https://drive.google.com/file/d/1FjxNApMQJFuSjSKSwQLdfP9NFX7mZlC1/view" target="_blank" rel="noreferrer noopener"><img src={Social} alt=""/></a>
            <h3><a href="https://github.com/michaelphan35/social-api" target="_blank" rel="noreferrer noopener">Social Api</a></h3>
          </div>
          <div className="item">
            <a href="https://drive.google.com/file/d/1IxujI2ZmWmfJ45wk7cjIYAThVIBunU_m/view" target="_blank" rel="noreferrer noopener"><img src={Commerce} alt=""/></a>
            <h3><a href="https://github.com/michaelphan35/e-commerce" target="_blank" rel="noreferrer noopener">E-Commerce</a></h3>
          </div>
        </div>
        <div className="transition">
          <a href="#skills"><img src={Arrow} alt="*" /></a>
          <h3>Proceed to next section</h3>
        </div>

    </div>
  )
}
