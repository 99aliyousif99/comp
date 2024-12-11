import React, { useState } from "react";
import "./Storage.css";
import upload from "../../assets/upload.svg";
import checkmark from "../../assets/vector (2).svg";

const Storage = () => {
  return (
    <>
      <div className="container">
        <input type="file" className="upload" />
        <div className="upload-container">
          <div className="loadContainer">
            <div className="loading">
              <label htmlFor="">Loading</label>
              <div className="loadBar"></div>
              <div className="amountuploaded">s</div>
            </div>
          </div>
          <div className="files">
          <img src={checkmark} alt="" />
          <div className="fileInfo">
            <p>file name</p>
            <p>files size</p>
            
          </div>
          <button>delete</button>
        </div>
        </div>
        

      </div>
    </>
  );
};

export default Storage;
