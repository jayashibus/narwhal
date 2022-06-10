import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = (props) => {
  // const { pathname } = props.match.params;
  let location = useLocation();
  console.log(location.pathname);
  const [active, setActive] = useState(location.pathname);

  console.log(active);
  return (
    <div>
      <div className="ui secondary  menu">
        <a className="item">NARWHAL</a>
        <a className="item active">Teams</a>
        <div className="ui right aligned category search item">
          <div className="ui compact menu">
            <a className="item">
              <i className="bi-person-lines-fill"></i>
              <div className="floating ui blue label">
                {props.data.current_user.notifications_count}
              </div>
            </a>
          </div>
          <div className="header space">
            Hello {props.data.current_user.name}
          </div>
          <div className="header">
            <img
              src={props.data.current_user.avatar}
              alt="hugenerd"
              width="35"
              height="35"
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
      <div className="ui secondary pointing menu noborder">
        <h4 className="ui horizontal divider header">
          <i className="bar chart icon"></i>
          Teams
        </h4>
        <div className="ui right aligned category search item">
          <div className="ui teal labeled icon button">
            CREATE NEW TEAM
            <i className="add icon"></i>
          </div>
        </div>
      </div>

      <div className="ui secondary pointing menu">
        <Link
          to="/"
          className={active == "/" ? "active item" : "item"}
          onClick={() => {
            setActive("/");
          }}
        >
          All
        </Link>

        <Link
          to="/favorites"
          className={active == "/favorites" ? "active item" : "item"}
          onClick={() => {
            setActive("/favorites");
          }}
        >
          Favorites
        </Link>
        <Link
          to="/archieve"
          className={active == "/archieve" ? "active item" : "item"}
          onClick={() => {
            setActive("/archieve");
          }}
        >
          Achieved
        </Link>
        <div className="ui right aligned category search item">
          <i className="search link icon" />
          <div className="ui transparent icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search team name..."
            />
          </div>
          <div className="results" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
