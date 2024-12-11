import React from "react";
import "./Storage.css";
import upload from "../../assets/upload.svg";
import checkmark from "../../assets/vector (2).svg";
const Storage = () => {
  return (
    <>
      <div className="upload-container">
        <input className="upload" type="file" />
        <img className="upload-icon" src={upload} alt="Upload" />
      </div>

      <div className="container">
        <div className="fileInfo">
          <div className="check">
            <img src={checkmark} alt="" />
          </div>
          <div className="fileName">
            <h4>file name</h4>
            <p>size used</p>
            
          </div>
          <button>delete</button>
        </div>
      </div>
    </>
  );
};

export default Storage;
