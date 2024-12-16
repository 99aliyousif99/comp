import React, { useRef, useState } from "react";
import "./NewTask.css";
import icon from "../../assets/icon.svg";
import Frame from "../../assets/frame (1).svg";
import checkmark from "../../assets/vector (2).svg";

const UPLOADCARE_PUBLIC_KEY = "208144d58c69f1c0d666"; 
const MAX_PROGRESS_WIDTH = 350; 

const NewTask = () => {
  const fileInputRef = useRef(null);
  const [filesInfo, setFilesInfo] = useState([]); 
  const [loadingFile, setLoadingFile] = useState(null); 
  const [uploadProgress, setUploadProgress] = useState(0); 

 
  const handleFileUpload = async (file) => {
    setLoadingFile(file.name);
    setUploadProgress(0); 

    const formData = new FormData();
    formData.append("UPLOADCARE_PUB_KEY", UPLOADCARE_PUBLIC_KEY);
    formData.append("UPLOADCARE_STORE", "auto"); 
    formData.append("file", file);

    try {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://upload.uploadcare.com/base/", true);

      
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100; 
          setUploadProgress(progress);
        }
      };

      
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);

         
          const newFile = {
            id: data.file, 
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2), 
            url: `https://ucarecdn.com/${data.file}/`, 
          };
          setFilesInfo((prevFiles) => [...prevFiles, newFile]);
        } else {
          console.error("Upload failed:", xhr.responseText);
        }

        setLoadingFile(null); 
        setUploadProgress(0); 
      };

    

      xhr.send(formData); 
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };


  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

 
  const handleInputChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      handleFileUpload(file); 
    }
  };

  
  const handleDeleteFile = (id) => {
    setFilesInfo((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  return (
    <div className="container">
      
      <button className="upload" onClick={handleButtonClick}>
        <img src={Frame} alt="Upload" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleInputChange}
      />

      <div className="content">
        
        {loadingFile && (
          <div className="uploadContainer">
            <div className="uploadInfo">
              <span>Uploading {loadingFile}...</span>
              <div className="load" style={{ width: `${MAX_PROGRESS_WIDTH}px` }}>
                <div
                  className="innerLoad"
                  style={{
                    width: `${(uploadProgress / 100) * MAX_PROGRESS_WIDTH}px`,
                  }}
                ></div>
              </div>
              <p>{uploadProgress.toFixed(2)}% uploaded</p>
            </div>
          </div>
        )}

       
        {filesInfo.length > 0 && (
          <div className="filesList">
            {filesInfo.map((file) => (
              <div key={file.id} className="files">
                <div className="check">
                  <img src={checkmark} alt="Success" />
                </div>
                <div className="filesInfo">
                  <p>{file.name}</p>
                  <p>{file.size} MB</p>
                </div>
                <div className="gapping"></div>
                <button
                  className="delete"
                  onClick={() => handleDeleteFile(file.id)}
                >
                  <img src={icon} alt="Delete" />
                </button>
              </div>
            ))}
          </div>
        )}

        
        {!loadingFile && filesInfo.length === 0 && <p>No files uploaded yet</p>}

        <button className="goTo">Go to downloads</button>
      </div>
    </div>
  );
};

export default NewTask;