import React from "react";
import Activity from "./Components/Activity/Activity";
import NavBar from "./Components/NavBar/NavBar";
import AllArchieves from "./Components/Teams/AllArchieves";

const Archieves = (props) => {
  return (
    <>
      <div className="fifteen wide column">
        <NavBar data={props.data} />
        <div className="ui grid">
          <div className="twelve wide column">
            <AllArchieves data={props.archievesData} />
          </div>
          <div className="four wide column">
            <Activity data={props.data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Archieves;
