import React from "react";
import "./NewTask.css";
import vector from "../../assets/vector (1).svg";
import checkmark from "../../assets/vector (2).svg";
import { useState, useEffect } from "react";

const NewTask = () => {
  return (
    <div className="container">
      <button className="upload">a</button>
      <div className="content">
        <div className="uploadContainer">
          <div className="uploadInfo">
            <span>Loading</span>
            <div className="load">
              <div className="innerLoad"></div>
            </div>
            <p>256 bytes of 1Tb</p>
          </div>
        </div>
        <div className="files">
          <div className="check">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
