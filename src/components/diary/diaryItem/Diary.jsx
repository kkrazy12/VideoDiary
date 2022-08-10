// LIST OF DIARY ITEMS
import { useRef, useState, useEffect } from "react";
import "./diary.scss";
import axios from "axios";
import DiaryEntry from "../diaryItems/DiaryEntry";

const DiaryList= () =>{

  const [diaryItems, setDiaryitems] = useState([]);
  // const [genre, setGenre] = useState(null);
  const inputTitleAdd = useRef();
  const inputDateAdd = useRef();
  const inputEntryAdd = useRef();

const handleAdd = async(e)=> {
  e.preventDefault();
  var data = {
    title : inputTitleAdd.current.value,
    date: inputDateAdd.current.value,
    entry: inputEntryAdd.current.value
  }
  try {
    const res = await axios.post(`diaryEntries`, data);
    console.log(data,res);
  } catch(e) {
    console.log(e);
  }
}

  useEffect(() => {
    const getDiaryItems = async () => {
      try {
        const res = await axios.get(`diaryEntries`);        
        //console.log(res);
        setDiaryitems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDiaryItems();
  });

  return (    
    <>
    <div className="diaryList">
      {diaryItems.map((item, index) => (
            <DiaryEntry index={index} item={item}/> 
          ))}
    </div>
    <form onSubmit={handleAdd}>
      <label htmlFor="titleAdd">Title: </label>
      <input id="titleAdd" type="text" ref={inputTitleAdd} />
      <br/>
      <label htmlFor="dateAdd">Date: </label>
      <input id="dateAdd" type="text" ref={inputDateAdd} />
      <br/>
      <label htmlFor="entryAdd">Entry: </label>
      <input id="entryAdd" type="text" ref={inputEntryAdd}/>
      <button type='submit'>Save</button>
    </form>
    </>
  )
}
export default DiaryList