import React from "react";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div className="col-auto col-md-3 col-xl-1 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="#/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        ></a>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <a href="#" className="nav-link text-white align-middle px-0">
              <i className="fs-4 bi-house"></i>{" "}
            </a>
          </li>
          <li>
            <a
              href="#submenu1"
              data-bs-toggle="collapse"
              className="nav-link px-0 text-white align-middle"
            >
              <i className="fs-4 bi-speedometer2"></i>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white px-0 align-middle">
              <i className="fs-4 bi-table"></i>{" "}
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className="nav-link px-0 text-white align-middle "
            >
              <i className="fs-4 bi-bootstrap"></i>{" "}
            </a>
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 text-white align-middle"
            >
              <i className="fs-4 bi-grid"></i>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-0 text-white align-middle">
              <i className="fs-4 bi-people"></i>{" "}
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none "
            aria-expanded="false"
          >
            <i className="bi-question-circle-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
