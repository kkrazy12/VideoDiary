import { InfoOutlined, PlayCircleOutline } from "@material-ui/icons"
import "./banner.scss"
import cat from "../img/cat.jpg"

export default function banner() {
  return (
    <div className="banner">
      <img src={cat} alt=""/>

<div className="info">
  <h1>Welcome back</h1>
  {/* <img src="https://w7.pngwing.com/pngs/153/490/png-transparent-logo-brand-white-font-design-white-text-logo.png" 
  alt=""/> */}
<span className="desc">
Ready to take a break? You can watch our latest stress management tip video by clicking play below.
While it may seem like there’s nothing you can do about stress, 
there are steps you can take to relieve the pressure and regain control.
</span>
<div className="buttons">
  <button className="play">
  <PlayCircleOutline/>
  <span>Play</span>
  </button>

  <button className="more">
    <InfoOutlined/>
    <span>Info</span>
  </button>
</div>
</div>

    </div>
  )
}
