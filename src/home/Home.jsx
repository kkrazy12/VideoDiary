import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import "./home.scss";
import List from "../components/Slider";
import "../App.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const home = () => {

  const [lists, setLists] = useState([]);
  // const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

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

export default home
