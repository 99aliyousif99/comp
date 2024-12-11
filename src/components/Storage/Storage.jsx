import React, { useState } from "react";
import "./Storage.css";
import upload from "../../assets/upload.svg";
import checkmark from "../../assets/vector (2).svg";

const Storage = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      const newFile = {
        name: file.name,
        size: file.size / 1024, // Convert bytes to kilobytes
        progress: 0,
      };
      setFiles((prevFiles) => [...prevFiles, newFile]);
      simulateUpload(newFile, file.size);
    }
  };

  const simulateUpload = (file, totalSize) => {
    let uploadedSize = 0;
    const interval = setInterval(() => {
      uploadedSize += totalSize * 0.1;
      if (uploadedSize >= totalSize) {
        uploadedSize = totalSize;
        clearInterval(interval);
      }
      setFiles((prevFiles) =>
        prevFiles.map((f) =>
          f.name === file.name ? { ...f, progress: (uploadedSize / totalSize) * 100 } : f
        )
      );
    }, 200);
  };

  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <>
      <div className="upload-container">
        <input className="upload" type="file" onChange={handleFileChange} />
        <img className="upload-icon" src={upload} alt="Upload" />
      </div>

      <div className="container">
        {files.map((file) => (
          <div key={file.name} className="loadBox">
            <div className="load">
              <div
                className="progress-bar"
                style={{
                  width: `${file.progress}%`,
                  backgroundColor: "#4caf50",
                  height: "100%",
                  transition: "width 0.2s ease-in-out",
                }}
              ></div>
            </div>
            <div className="remaining">
              {Math.round((file.progress / 100) * file.size)} out of {file.size.toFixed(2)} KB
            </div>
            <div className="fileInfo">
              <div className="check">
                {file.progress === 100 && <img src={checkmark} alt="Checkmark" />}
              </div>
              <div className="fileName">
                <h4>{file.name}</h4>
                <p>{file.size.toFixed(2)} KB</p>
              </div>
              <button onClick={() => handleDelete(file.name)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Storage;