import React from "react";
import Activity from "./Components/Activity/Activity";
import NavBar from "./Components/NavBar/NavBar";
import AllFavorites from "./Components/Teams/AllFavorites";

const Favorites = (props) => {
  return (
    <>
      <div className="fifteen wide column">
        <NavBar data={props.data} />
        <div className="ui grid">
          <div className="twelve wide column">
            <AllFavorites data={props.favoriteData} />
          </div>
          <div className="four wide column">
            <Activity data={props.data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
