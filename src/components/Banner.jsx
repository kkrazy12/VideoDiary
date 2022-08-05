import { InfoOutlined, PlayCircleOutline } from "@material-ui/icons"
import "./banner.scss"

export default function banner() {
  return (
    <div className="banner">
      <img src="https://images.hdqwalls.com/wallpapers/ellie-the-last-of-us-4k-yl.jpg" alt=""/>

<div className="info">
  <img src="https://w7.pngwing.com/pngs/153/490/png-transparent-logo-brand-white-font-design-white-text-logo.png" 
  alt=""/>
<span className="description">
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Quia alias quas tempora deserunt esse saepe iste doloremque optio ex commodi suscipit expedita at odio porro, 
amet mollitia aliquam sequi delectus?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, natus!
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
