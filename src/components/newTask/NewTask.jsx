import React from "react";
import "./NewTask.css";
import icon from "../../assets/icon.svg";
import checkmark from "../../assets/vector (2).svg";
import { useState, useEffect } from "react";

const NewTask = () => {
  return (
    <div className="container">
      <button className="upload"><input type="file" /></button>
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
            <img src={checkmark} alt="" />
          </div>
          <div className="filesInfo">
            <p>FilesName.jpg</p>
            <p>1 TB used</p>
          </div>
          <div className="gapping"></div>
          <button className="delete"> <img src={icon} alt="" /></button>
        </div>
        
        <button className="goTo">go to downloads</button>
      </div>
    </div>
  );
};

export default NewTask;
