import React from "react";
import "./Task.css";
import vector from "../../assets/Vector (1).svg";
import checkmark from "../../assets/Vector (2).svg";
import { useState, useEffect } from "react";

const Task = () => {
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Experience contextual conversations",
      complete: false,
    },
    {
      id: 2,
      title: "Brand your customer experience",
      complete: false,
    },
    {
      id: 3,
      title: "Offer support beyond your website",
      complete: false,
    },
    {
      id: 4,
      title: "Top customer support with bots",
      complete: false,
    },
    {
      id: 5,
      title: "Build your team",
      complete: false,
    },
  ]);
  const [progress, setProgress] = useState(0);
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    checkIfComplete();
    console.log(progress)
    
  }, [progress]);

  const checkIfComplete = () => {
    if (progress >= 100) {
      setAllStepsCompleted(true);
    } else {
      setAllStepsCompleted(false);
    }
  };

  const incrementProgress = () => {
    setProgress((Progress) => {
      return Progress + 20;
    });
  };

  const decrementProgress = () => {
    setProgress((progress) => {
      return progress - 20;
    });
  };

  const skipSteps = () => {
    setAllStepsCompleted(true);
  };

  const [showTasks, setShowTasks] = useState(true);
  const toggle = (id) => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) =>
        step.id === id ? { ...step, complete: !step.complete } : step
      );

      const toggledStep = updatedSteps.find((step) => step.id === id);
      if (toggledStep.complete) {
        incrementProgress();
        setCompletedTasks((prev) => prev + 1);
        checkIfComplete();
      } else {
        decrementProgress();
        setCompletedTasks((prev) => prev - 1);
      }

      return updatedSteps;
    });
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
          <div
            style={{
              paddingBottom: "20px",
              width: "260px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {progress}%
            <div
              style={{
                width: `${progress}%`,
                height: "4px",
                background: "#16182E",
                border: "solid",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <hr />
          <div className={`tasks ${showTasks ? "show" : "hide"}`}>
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
          <button className="btn" onClick={skipSteps}>
            Skip this
          </button>
        </div>
      </div>
      <div className="starting">
        <button disabled={!allStepsCompleted}>
          Get started <div className="tasknum"> {completedTasks}</div>
        </button>
      </div>
    </>
  );
};

export default Task;
