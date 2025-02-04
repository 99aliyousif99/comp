import React, { useState } from "react";
import "./Storage.css";
import checkmark from "../../assets/Vector (2).svg";
import icon from "../../assets/Icon.svg";
import { UploadClient } from "@uploadcare/upload-client";
const client = new UploadClient({ publicKey: "208144d58c69f1c0d666" });

const Storage = () => {
  const [fileInfos, setFileInfos] = useState([]);
  const [totalSize, setTotalSize] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const newFileInfo = {
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      rawSize: file.size,
    };
    setFileInfos((prevFileInfos) => [...prevFileInfos, newFileInfo]);
    setTotalSize((prevTotalSize) => prevTotalSize + file.size);
    setProgress(0);

    try {
      const upload = client.uploadFile(file, {
        onProgress: (info) => {
          const progressValue = (info.progress * 100).toFixed(2);
          console.log(`Progress: ${progressValue}%`);
          setProgress(parseFloat(progressValue));
        },
      });

      const result = await upload;
      console.log("File uploaded:", result);
      setProgress(100);
    } catch (error) {
      console.error("Upload failed:", error);
      setProgress(0);
    }
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
              <div className="loadInfo">
                <div className="loading">
                  <label htmlFor="">Loading</label>
                  <div
                    className="loadBar"
                    style={{
                      width: progress === 100 ? "350px" : `${progress}%`,
                    }}
                  ></div>
                  <div className="amountuploaded">{totalSize}</div>
                </div>
              </div>
            </div>
          )}
          {progress === 100 &&
            fileInfos.map((fileInfo, index) => (
              <div key={index} className="files">
                <div className="checkMarkdiv">
                  <img src={checkmark} alt="" className="checkmark" />
                </div>

                <div className="fileInfo">
                  <div className="nameSize">
                    <p>{fileInfo.name}</p>
                    <p className="loadAmount">{fileInfo.size}</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(index)}>
                  <img src={icon} alt="" className="trash" />
                  <div className="lineBreak"></div>
                </button>
              </div>
            ))}
          <button className="download"> Go to downloads</button>
        </div>
      </div>
    </>
  );
};

export default Storage;
