import "./portfolio.scss"

export default function portfolio() {
  return (
    <div className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Run Buddy</li>
          <li className="active">Web Dev Social</li>
          <li className="active">Spotify Music Search</li>
          <li className="active">Social API</li>
          <li className="active">E-Commerce</li>
        </ul>
        <div className="container">
          <div className="item">
            <a href="https://github.com/michaelphan35/run-buddy"><img src="images/placeholder-image.png" alt=""/></a>
            <h3>Run Buddy</h3>
          </div>
          <div className="item">
            <a href="https://github.com/michaelphan35/web-dev-social"><img src="images/placeholder-image.png" alt=""/></a>
            <h3>Web Dev Social</h3>
          </div>
          <div className="item">
            <a href="/"><img src="images/Capture1.JPG" alt=""/></a>
            <h3>Spotify Music Search</h3>
          </div>
          <div className="item">
            <a href="https://github.com/michaelphan35/social-api"><img src="images/placeholder-image.png" alt=""/></a>
            <h3>Social Api</h3>
          </div>
          <div className="item">
            <a href="https://github.com/michaelphan35/e-commerce"><img src="images/placeholder-image.png" alt=""/></a>
            <h3>E-Commerce</h3>
          </div>
        </div>
    </div>
  )
}
