import "./sliderItems.scss";
import { InfoOutlined, PlayCircleOutline, Add, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react";


export default function SliderItems({index}) {
const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://youtu.be/vwqQPeeVM1s"; //adding my mp4 here

  return (
    <div className="sliderItems" 
    style={{left: isHovered && index * 225 - 50 + index * 2.5}} //index multiplied by item width minus the 50 padding
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
{/*       
      onMouseEnter={()=> this.setState({setIsHovered: true})}
      onMouseLeave={()=> this.setState({isHovered: false})}  */}

      
        <>        
        {isHovered ? 
            <iframe style={{width:'100%',height:'140px'}} 
            src="https://www.youtube.com/embed/zySUlGXbXvA?controls=0&amp;showinfo=0&amp;autoplay=1&amp;mute=1" 
            title="YouTube video player" 
            frameborder="0"
            controls="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>

            </iframe>
            
             :<img src="https://www.sho.com/site/image-bin/images/0_0_3473616/0_0_3473616_00h_1280x640.jpg" alt="" />
        }
          <div className="itemInfo">
            <div className="icons">
            <Add className="icon"/>
          <PlayCircleOutline className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>10 minutes</span>&nbsp;<span>2022</span> {/*&nbsp = non-breaking space so my spans are further appointment*/}
            </div>

            <div className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Assumenda eos cupiditate, dolorem velit voluptatem 
            </div>

            <div className="genre">Anxiety Relief</div>
          </div>
        </> 
      
    </div>
  )
}
