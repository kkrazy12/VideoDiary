// INDIVIDUAL DIARY ENTRIES
import "./diaryEntry.scss";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiaryEntry({index, item}) {

  const [showEntryForm, setEntryForm] = useState(false); //initally set to false because I fon't want the user to see this until they click add
  const inputTitleUpdate = useRef();
  const inputDateUpdate = useRef();
  const inputEntryUpdate = useRef();

  //DELETE diary entry
  const handleDelete = async(id, e) => {
    try {
      const res = await axios.delete("diaryEntries/"+id);
    } catch(e) { //catch any erorrs
      console.log(e);//console log my errors
    }
  }

  //UPDATE diary entry
  const handleUpdate = async(id,e) => {
    e.preventDefault();
    
    var data = {
      // The current value in the users diary entry input boxes
      title : inputTitleUpdate.current.value, 
      date: inputDateUpdate.current.value,
      entry: inputEntryUpdate.current.value
    }

    try {
      const res = await axios.put("diaryEntries/"+id,data); //including data so the user can see what they previosuly inout in the text fields
      setEntryForm(!showEntryForm); //show the entry form so the user can edit
    } catch(e) {
      console.log(e);
    }
  }

  

  return (
    <>
    <div className="diaryEntry">
      {
        showEntryForm ?
        //Setting form ID to the database entry ID so it can be controlled outside the form 
        <form id={"form-"+item.id} onSubmit={function(event){handleUpdate(item._id,event)}}>
          <label htmlFor="titleUpdate">Title: </label>
          {/* Set default value so the user can see what they are editing on the form */}
          <input id="titleUpdate" type="text" ref={inputTitleUpdate} defaultValue={item.title}/>
          <br/>
          <label htmlFor="dateUpdate">Date: </label>
          <input id="dateUpdate" type="text" ref={inputDateUpdate}  defaultValue={item.date}/>
          <br/>
          <label htmlFor="entryUpdate">Entry: </label>
          <textarea id="entryUpdate" type="text" ref={inputEntryUpdate} defaultValue={item.entry}></textarea>
          
        </form>
        :        
          <div>
            <div><span>title: </span>{item.title}</div>
            <div>{item.date}</div>
            <div>{item.entry}</div>
          </div>
      }
      
      {/* Upon click, flip the show entry form value (currently set to false)  If show entryform = true then show form and change text to cancel  */}
        <button type="button" onClick={() => {setEntryForm(!showEntryForm)}}>{showEntryForm ? "Cancel": "Edit"}</button><br/>
        {
          showEntryForm ?

          //When the form is submitted, save it and then stop dispalying it in the add entry form 
        <button type="submit" form={"form-"+item.id} onSubmit={()=>setEntryForm(!showEntryForm)}>Save</button>
        : null
        }
        {/* Upon click, delete the item and ID  */}
      <button type="button" onClick={function(event){handleDelete(item._id)}}>Delete</button>
    </div>

    </>
  )};

  
