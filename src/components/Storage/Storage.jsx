import React, { useState, useEffect } from "react";
import "./Storage.css";
import upload from "../../assets/upload.svg";
import checkmark from "../../assets/vector (2).svg";

const Storage = () => {
  const [fileInfos, setFileInfos] = useState([]);
  const [totalSize, setTotalSize] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const newFileInfo = {
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      rawSize: file.size,
    };
    setFileInfos((prevFileInfos) => [...prevFileInfos, newFileInfo]);
    setTotalSize((prevTotalSize) => prevTotalSize + file.size);
    setProgress(0);
    
    let progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 550) {
          clearInterval(progressInterval);
          return 550;
        }
        return prevProgress + 10;
      });
    }, 100);
  };

  const handleDelete = (index) => {
    setFileInfos((prevFileInfos) => {
      const newFileInfos = [...prevFileInfos];
      const removedFile = newFileInfos.splice(index, 1)[0];
      setTotalSize((prevTotalSize) => prevTotalSize - removedFile.rawSize);
      return newFileInfos;
    });
  };

  return (
    <>
      <div className="container">
        <input type="file" className="upload" onChange={handleFileChange} />
        <div className="upload-container">
        {fileInfos.length > 0 && (
  <div className="loadContainer">
    <div className="loading">
      <label htmlFor="">Loading</label>
      <div className="loadBar" style={{ width: `${progress}%` }}></div>
      <div className="amountuploaded">{totalSize}</div>
    </div>
  </div>
)}
          {progress === 550 && fileInfos.map((fileInfo, index) => (
            <div key={index} className="files">
              <img src={checkmark} alt="" />
              <div className="fileInfo">
                <p>{fileInfo.name}</p>
                <p>{fileInfo.size}</p>
              </div>
              <button onClick={() => handleDelete(index)}>delete</button>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Storage;