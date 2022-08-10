// INDIVIDUAL DIARY ENTRIES
import "./diaryEntry.scss";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiaryEntry({index, item}) {

  const inputTitleUpdate = useRef();
  const inputDateUpdate = useRef();
  const inputEntryUpdate = useRef();

  const handleDelete = async(id, e) => {
    try {
      const res = await axios.delete("diaryEntries/"+id);
    } catch(e) {
      console.log(e);
    }
  }

  const handleUpdate = async(id,e) => {
    e.preventDefault();
    
    var data = {
      title : inputTitleUpdate.current.value,
      date: inputDateUpdate.current.value,
      entry: inputEntryUpdate.current.value
    }

    try {
      const res = await axios.put("diaryEntries/"+id,data);

    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
    <div className="diaryEntry">
        <div><span>title: </span>{item.title}</div>
        <div>{item.date}</div>
        <div>{item.entry}</div>
    </div>
    <form onSubmit={function(event){handleUpdate(item._id,event)}}>
      <label htmlFor="titleUpdate">Title: </label>
      <input id="titleUpdate" type="text" ref={inputTitleUpdate} />
      <br/>
      <label htmlFor="dateUpdate">Date: </label>
      <input id="dateUpdate" type="text" ref={inputDateUpdate} />
      <br/>
      <label htmlFor="entryUpdate">Entry: </label>
      <input id="entryUpdate" type="text" ref={inputEntryUpdate}/>
      <button type='submit'>Save</button>
    </form>
    <button type="button">Edit</button><br/>
    <button type="button" onClick={function(event){handleDelete(item._id)}}>Delete</button>
    </>
  )};

  
