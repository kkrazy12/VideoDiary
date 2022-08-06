import { useRef } from "react";
import { firestore } from "./firebase";
import { doc, addDoc, collection, updateDoc } from "@firebase/firestore";

function App() {
    const _add = useRef();
    const inputTitle = useRef();
    const inputUrl = useRef();
    const _update = useRef();
    const inputTitleUpdate = useRef();
    const inputUrlUpdate = useRef();
  
    const videosTable = collection(firestore, "Videos");
   
    const handleSave = async(e) => {
      e.preventDefault();
      console.log(inputTitle.current.value)
      console.log(inputUrl.current.value)
      var data = {
        Title : inputTitle.current.value,
        url: inputUrl.current.value
      }
  
      try {
        addDoc(videosTable, data);
        _add.current.style.color = "green";
      } catch(e) {
        console.log(e);
        _add.current.style.color = "red";
      }
    }
  
    const handleUpdate = async(id,e) => {
      e.preventDefault();
      console.log(inputTitleUpdate.current.value)
      console.log(inputUrlUpdate.current.value)
      var data = {
        Title : inputTitleUpdate.current.value,
        url: inputUrlUpdate.current.value
      }
  
      try {
        console.log(id)
        const updoc = doc(firestore,"Videos",id);
        await updateDoc(updoc, data);
        _update.current.style.color = "green";
      } catch(e) {
        console.log(e);
        _update.current.style.color = "red";
      }
    }
  
    return (
      <div className="App">
          <form onSubmit={handleSave}>
            <h1 ref={_add}>Add</h1>
            <label htmlFor="title">Title: </label>
            <input id="title" type="text" ref={inputTitle}/>
            <br/>
            <label htmlFor="url">URL: </label>
            <input id="url" type="text" ref={inputUrl}/>
            <button type='submit'>Save</button>
          </form>
  
          <form onSubmit={function(event){handleUpdate("nCwDMwVvI0rIAR0A5puK",event)}}>
            <h1 ref={_update}>Update</h1>
            <label htmlFor="titleUpdate">Title: </label>
            <input id="titleUpdate" type="text" ref={inputTitleUpdate}/>
            <br/>
            <label htmlFor="urlUpdate">URL: </label>
            <input id="urlUpdate" type="text" ref={inputUrlUpdate}/>
            <button type='submit'>Save</button>
          </form>
      </div>
  
      
    );
  }
  
  export default App;
  