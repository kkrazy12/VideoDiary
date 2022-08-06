import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useRef, useState } from "react";
import "./slider.scss";
import SliderItems from "./SliderItems";

export default function List() {

const [isMoved, setIsMoved] = useState(false);//initial state is flase because nothing has been clicked yet
const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef()

//Creating my on click function for arrows - note, video containers are 230px
const handleClick = (direction) =>{ 
  setIsMoved(true)//once the left or right arrow is clicked setIsMoved is now true 
  //getBoundingClientRect returns my slider item element (DOMRect) including padding and border 
  let distance = listRef.current.getBoundingClientRect().x - 50 // x minus the 50px padding 
  if(direction === "left" && slideNumber > 0){ //if we are at the start of the slider array (zero) -
    setSlideNumber(slideNumber - 1);//then set the slide number minus 1 so the user can't click past the first slider item
    //if left arrow is clicked then translate 230px plus the distance value in px
      listRef.current.style.transform = `translateX(${230 + distance}px)` //it now slides left one video at a time upon left arrow click
  }

  if(direction === "right" && slideNumber < 5){ //if the slide number is smaller than 5, the user can't click the right arrow 
    setSlideNumber(slideNumber + 1); //Plus one as we are going right on the x axis 
    listRef.current.style.transform = `translateX(${-230 + distance}px)` //it's -230 as it is moving left on the x axis 
}
}

  return (
    <div className="list">
      <span className="listTitle">What would you like to watch or listen to?</span>
      <div className="wrapper">
        <ArrowBackIosOutlined 
        className="sliderArrow left" 
        onClick={() => handleClick('left')} 
        style={{display: !isMoved && "none"}}
          />

        <div className="container" ref={listRef}>
          {}
          <SliderItems index={0}/> 
          <SliderItems index={1}/>
          <SliderItems index={2}/>
          <SliderItems index={3}/>
          <SliderItems index={4}/>
          <SliderItems index={5}/>
          <SliderItems index={6}/>
          <SliderItems index={7}/>
          <SliderItems index={8}/>
          <SliderItems index={9}/>
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')}/>
      </div>
    </div>
  )
}
