import React from "react";
import "./task.css";
import vector from "../../assets/vector (1).svg";
import checkmark from "../../assets/vector (2).svg";
import { useState } from "react";

const Task = () => {

  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Experience contextual conversations",
      complete: true,
    },
    {
      id: 2,
      title: "Brand your customer experience",
      complete: true,
    },
    {
      id: 3,
      title: "Offer support beyond your website",
      complete: true,
    },
    {
      id: 4,
      title: "Top customer support with bots",
      complete: true,
    },
    {
      id: 5,
      title: "Build your team",
      complete: true,
    }
  ]);
  const [showTasks, setShowTasks] = useState(true);
  const toggle = (id) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, complete: !step.complete } : step
    ));
  };
  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="tour">
            <h3>Take a quick tour</h3>
            <button onClick={toggleTasks}>
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
          <div className={`tasks ${showTasks ? 'show' : 'hide'}`}>
            {steps.map((step) => (
              <div className="task" key={step.id}>
                <button
                  onClick={() => toggle(step.id)}
                  style={{
                    backgroundColor: step.complete ? "#16182E" : "white",
                  }}
                >
                  <img src={checkmark} alt="checkmark" />
                </button>
                <p>{step.title}</p>
              </div>
            ))}
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