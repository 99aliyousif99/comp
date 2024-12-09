import React from "react";
import "./task.css";
import vector from "../../assets/vector (1).svg";
import checkmark from "../../assets/vector (2).svg";
const Task = () => {
  return (
    <>
    <div className="container">
      <div className="content">
        <div className="tour">
          <h3>Take a quick tour</h3>
          <button>
            <img src={vector} alt="" />
          </button>
        </div>

        <p>
          Here are a few steps to help you <br /> hit the ground
        </p>
        <div className="progress">
          <h3>20%</h3>
          <progress value={20} max={100} />
        </div>
        <hr />
        <div className="tasks">
          <div className="task">
          <button ><img src={checkmark} alt="checkmark" /></button>
          <p>Experience contextual conversations</p>
          </div>
          <div className="task">
          <button ><img src={checkmark} alt="checkmark" /></button>
          <p>Brand your customer experience</p>
          </div>
          <div className="task">
          <button ><img src={checkmark} alt="checkmark" /></button>
          <p>Offer support beyond your website</p>
          </div>
          <div className="task">
          <button ><img src={checkmark} alt="checkmark" /></button>
          <p>Top customer support with bots</p>
          </div>
          <div className="task">
          <button ><img src={checkmark} alt="checkmark" /></button>
          <p>Build your team</p>
          </div>
        </div>
        <button className="btn">Skip this</button>
      </div>
    </div>
    <div className="starting">
        <button>Get started</button>
        
    </div>
    </>
  );
};

export default Task;
