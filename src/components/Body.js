import RestaurantCard from "./RestaurantCard";
import data from "../utils/config";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(data);
  return (
    <div id="body">
      <div className="search-bar">
        <input className="res-name" />
        <button
          onClick={() => {
            const input = document.querySelector(".res-name");
            let resFiltered = resList.filter((res) => {
              return res.data.data.name == input.value;
            });
            setResList(resFiltered);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter-btn">
        <button
          onClick={() => {
            let updateData = resList.filter((res) => {
              return res.data.data.avgRating > 4;
            });
            setResList(updateData);
          }}
        >
          filter
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => {
          return <RestaurantCard info={res} key={res.data.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
