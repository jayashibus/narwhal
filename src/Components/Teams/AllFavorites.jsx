import React from "react";
import "./AllTeams.css";

const AllFavorites = (props) => {
  const listTeam = props.data.map((team) => (
    <div className="ui cards" key={team.id}>
      <div className="card">
        <div className="content">
          <img
            className="left floated mini ui image"
            src={team.image}
            alt="avatar"
          />
          <span className="right floated star">
            <i className="star outline icon"></i>
          </span>
          <div className="header">{team.name}</div>
          <div className="meta">Created on {team.created_at}</div>
          <div className="description">{team.description}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="chat icon"></i>
            {team.campaigns_count} Campaigns
          </span>
          <span className="right floated">
            <i className="user icon"></i>
            {team.leads_count} Leads
          </span>
        </div>
      </div>
    </div>
  ));

  return <div>{listTeam}</div>;
};

export default AllFavorites;
