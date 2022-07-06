import "./portfolio.scss"

export default function portfolio() {
  return (
    <div className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Run Buddy</li>
          <li>Now Spinng</li>
          <li>Spotify Music Search</li>
          <li>Social API</li>
          <li>E-Commerce</li>
        </ul>
        <div className="container">
          <div className="item">
            <img src="images/placeholder-image.png" alt="" />
            <h3>hello</h3>
          </div>
          <div className="item">
            <img src="images/placeholder-image.png" alt="" />
            <h3>hello</h3>
          </div>
          <div className="item">
            <img src="images/placeholder-image.png" alt="" />
            <h3>hello</h3>
          </div>
          <div className="item">
            <img src="images/placeholder-image.png" alt="" />
            <h3>hello</h3>
          </div>
          <div className="item">
            <img src="images/placeholder-image.png" alt="" />
            <h3>hello</h3>
          </div>
        </div>
    </div>
  )
}
