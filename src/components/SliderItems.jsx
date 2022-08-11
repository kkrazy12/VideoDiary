import "./sliderItems.scss";
import { InfoOutlined, PlayCircleOutline, Add, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SliderItems({index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState({});
  
    useEffect(() => {
      const getVideo = async () => {
      try {
        const res = await axios.get("/videos/find/" + item); 
        setVideo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getVideo();

  }, [item]);


  return (
    <Link to={{pathname: "/watch", video:video}}>
    <div className="sliderItems" 
    style={{left: isHovered && index * 225 - 50 + index * 2.5}} //index multiplied by item width minus the 50 padding
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <>
        {isHovered ? 
            <iframe style={{width:'100%',height:'140px'}} 
            src={`https://www.youtube.com/embed/`+video.url+`?controls=0&amp;showinfo=0&amp;autoplay=1&amp;mute=1`} 
            title="YouTube video player" 
            
            controls="0" //show no controls when user is hovering on the trailer yt vid
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>

            </iframe>
            //If user is not hovering - then show thumbnail img
             :<img src={video.img} alt="" />
        }
          <div className="itemInfo">
            <div className="icons">
            <Add className="icon"/>
          <PlayCircleOutline className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              {/*<span>10 minutes</span>&nbsp;*/}<span>{video.year}</span> {/*&nbsp = non-breaking space so my spans are further appointment*/}
            </div>

            <div className="desc">
              {video.desc}
            </div>

            {/* <div className="genre">Anxiety Relief</div> */}
          </div>
        </> 
      
    </div>

    </Link>
  )};

  
