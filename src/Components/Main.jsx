import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";
import "./Style/main.css";
function Main() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchedData = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/photos/?page=${page}&client_id=fnRGxxXp2xykiYtoqXKec1Y02FY_IE88i9sbYszSu2Q`
      );
      const newData = response.data;
      setData(newData);
      setLoading(false);

      if (newData.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
      console.log("Arya", page);
      setPage((prevValue) => prevValue + 1);
      console.log(page)
      fetchedData(page);
  };
  useEffect(() => {
    fetchedData(page);
  }, [handleScroll]);

  return (
    <>
      <Header />
      
      <section className="card-container" >
        <button type="button" onClick={handleScroll}>Load more</button>
        {data.map((ele) => (
          <Card key={ele.id} fetchedData={ele} />
        ))}
      </section>
    </>
  );
}

export default Main;
