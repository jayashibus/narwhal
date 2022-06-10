import React from "react";
import "./Activity.css";

const Activity = (props) => {
  console.log(props.data.activities);

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const listActivity = props.data.activities.map((activity) => (
    <div className="comment" key={generateKey(Math.random())}>
      <img
        className="ui avatar image"
        src={activity.person.avatar}
        alt="avatar"
      />
      <a className="header">{activity.person.name}</a> {activity.action}
      <a>
        <b> {activity.target}</b>
      </a>
      <div className="date">{activity.created_at}</div>
    </div>
  ));

  return (
    <div className="ui card activity">
      <div className="content">
        <div className="header">Activity</div>
      </div>
      <div className="content">{listActivity}</div>
    </div>
  );
};

export default Activity;
