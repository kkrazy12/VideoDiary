import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import "./home.scss";
import List from "../components/Slider";
import "../App.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [lists, setLists] = useState([]);
  // const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists`);        
        console.log(res);
        //setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  });

  return (
    <div className="home">
      <Navbar/>
  <Banner/>
  {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home
