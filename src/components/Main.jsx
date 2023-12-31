import React from "react";
import "../components/Main.css";
import AddNew from "./AddNew";

export default function Main() {
  let items = [
    {
      title: "To Do",
      color: "#3659e2",
    },
    {
      title: "In Progress",
      color: "#3659e2",
    },
    {
      title: "In Review",
      color: "#3659e2",
    },
    {
      title: "Completed",
      color: "#3659e2",
    },
  ];
  return (
    <>
      <div className="project">
        <div className="project-title">
          <h5>My Projects</h5>
        </div>
        <div className="four">
          <div className="container">
            <button class="in-progress-button1">
              <span class="dot1"></span> To Do
            </button>
            
            <button class="add-new-button2" >
              <span class="plus-icon2">+</span> Add new
            </button>
          </div>
          <div className="container">
            <button class="in-progress-button">
              <span class="dot"></span> In Progress
            </button>
            <button class="add-new-button1">
              <span class="plus-icon1">+</span> Add new
            </button>
          </div>
          <div className="container">
            <button class="in-progress-button2">
              <span class="dot2"></span> In Review
            </button>
            <button class="add-new-button">
              <span class="plus-icon">+</span> Add new
            </button>
          </div>
          <div className="container">
            <button class="in-progress-button3">
              <span class="dot3"></span> Completed
            </button>
            <button class="add-new-button3">
              <span class="plus-icon3">+</span> Add new
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
