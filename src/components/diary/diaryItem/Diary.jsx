import { useRef, useState, useEffect } from "react";
import "./diary.scss";
import axios from "axios";
import DiaryEntry from "../diaryItems/DiaryEntry";

const DiaryList= () =>{

  const [diaryItems, setDiaryitems] = useState([]);//empty array for diary items
  const [showForm, setShowForm] = useState(false);
  const inputTitleAdd = useRef(); //useRef tracks a value for input title element
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
    // Reset the users text field values to an empty string so their last entry isn't still their upon save 
    inputTitleAdd.current.value = '';
    inputDateAdd.current.value = '';
    inputEntryAdd.current.value = '';
    console.log(data,res);
    setShowForm(!showForm);
  } catch(e) {
    console.log(e);
  }
}

//get the user's diary entries 
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
      {
        showForm ? // If show form = true then show form 
        <div className="">
          <form id="addForm" onSubmit={handleAdd}>
            <label htmlFor="titleAdd">Title: </label>
            {/* //ref tracks current state of 'titleAdd' then saves it in the constant*/}
            <input id="titleAdd" type="text" ref={inputTitleAdd} />
            <br/>
            <label htmlFor="dateAdd">Date: </label>
            <input id="dateAdd" type="text" ref={inputDateAdd} />
            <br/>
            <label htmlFor="entryAdd">Entry: </label>
            {/* Using text area becasue it allows the user to adjust the size of the text box */}
            <textarea id="entryAdd" type="text" ref={inputEntryAdd}></textarea> 
            
          </form>
        </div>
        : null // if show form = false then return null - nothing. 
      }
      {/* Upon click, flip the show form value. If show form = true then show form and change text to cancel. If show form = false then show 'add entry' text in btn instead */}
      <button type="button" onClick={() => {setShowForm(!showForm)}}>{showForm ? "Cancel": "Add Entry"}</button>
      {
        showForm ?
        <button form="addForm" type='submit'>Save</button>
        : null
      }
      {diaryItems.map((item, index) => (
            <DiaryEntry index={index} item={item}/> 
          ))}
    </div>
    
    </>
  )
}
export default DiaryList