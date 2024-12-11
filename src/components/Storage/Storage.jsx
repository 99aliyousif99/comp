import React, { useState } from "react";
import "./Storage.css";
import upload from "../../assets/upload.svg";
import checkmark from "../../assets/vector (2).svg";

const Storage = () => {
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize(file.size);
      setUploadProgress(0);
      simulateUpload(file.size); 
    }
  };

  const simulateUpload = (totalSize) => {
    let uploadedSize = 0;
    const interval = setInterval(() => {
      uploadedSize += totalSize * 0.1; 
      if (uploadedSize >= totalSize) {
        uploadedSize = totalSize;
        clearInterval(interval); 
      }
      setUploadProgress((uploadedSize / totalSize) * 100);
    }, 200); 
  };

  return (
    <>
      <div className="upload-container">
        <input className="upload" type="file" onChange={handleFileChange} />
        <img className="upload-icon" src={upload} alt="Upload" />
      </div>

      <div className="container">
        <div className="loadBox">
          <div className="load">
            <div
              className="progress-bar"
              style={{
                width: `${uploadProgress}%`,
                backgroundColor: "#4caf50",
                height: "100%",
                transition: "width 0.2s ease-in-out",
              }}
            ></div>
          </div>
          <div className="remaining">
            {Math.round((uploadProgress / 100) * fileSize)} out of {fileSize} bytes
          </div>
        </div>
        <div className="fileInfo">
          <div className="check">
            {uploadProgress === 100 && <img src={checkmark} alt="Checkmark" />}
          </div>
          <div className="fileName">
            <h4>{fileName}</h4>
            <p>{fileSize} bytes</p>
          </div>
          <button onClick={() => setUploadProgress(0)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default Storage;
