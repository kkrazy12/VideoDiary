import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
    const location = useLocation();
    const video = location.video;
    return (
      <div className="watch" >
        
        <iframe style={{width:'100%',minHeight:"720px"}} 
            src={`https://www.youtube.com/embed/`+video.url+`?controls=1&amp;showinfo=1&amp;autoplay=1&amp;`} 
            title="YouTube video player" 
            frameBorder="0"
            controls="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen 
            >
            </iframe>
      </div>
    );
  }