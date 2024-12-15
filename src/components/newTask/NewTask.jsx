import React, { useRef, useState } from "react";
import "./NewTask.css";
import icon from "../../assets/icon.svg";
import Frame from "../../assets/frame (1).svg";
import checkmark from "../../assets/vector (2).svg";

const UPLOADCARE_PUBLIC_KEY = "208144d58c69f1c0d666"; // Replace with your Uploadcare public key

const NewTask = () => {
  const fileInputRef = useRef(null);
  const [filesInfo, setFilesInfo] = useState([]); // Array to store multiple file info
  const [loading, setLoading] = useState(false); // Track loading state

  // Handle file upload via Uploadcare API
  const handleFileUpload = async (file) => {
    setLoading(true); // Show loading indicator
    const formData = new FormData();
    formData.append("UPLOADCARE_PUB_KEY", UPLOADCARE_PUBLIC_KEY);
    formData.append("UPLOADCARE_STORE", "auto"); // Store files automatically
    formData.append("file", file);

    try {
      const response = await fetch("https://upload.uploadcare.com/base/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json(); // Get response data

      // Add the new file info to the array
      const newFile = {
        id: data.file, // Unique ID of the file
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2), // File size in MB
        url: `https://ucarecdn.com/${data.file}/`, // File URL
      };
      setFilesInfo((prevFiles) => [...prevFiles, newFile]); // Append to the existing files
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  // Trigger file input dialog
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleInputChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      handleFileUpload(file); // Upload the file
    }
  };

  // Handle file deletion
  const handleDeleteFile = (id) => {
    setFilesInfo((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  return (
    <div className="container">
      {/* Custom Upload Button */}
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
        {/* Display loading state */}
        {loading && (
          <div className="uploadContainer">
            <div className="uploadInfo">
              <span>Uploading...</span>
              <div className="load">
                <div className="innerLoad"></div>
              </div>
              <p>Please wait while we upload your file</p>
            </div>
          </div>
        )}

        {/* Display uploaded files dynamically */}
        {!loading && filesInfo.length > 0 && (
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

        {/* Display a placeholder if no files are uploaded */}
        {!loading && filesInfo.length === 0 && <p>No files uploaded yet</p>}

        <button className="goTo">Go to downloads</button>
      </div>
    </div>
  );
};

export default NewTask;