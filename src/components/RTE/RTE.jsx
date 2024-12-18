import React from "react";
import "./RTE.css";
import Bold from "../../assets/Bold.svg";
import Italic from "../../assets/italic.svg";
import Link from "../../assets/Link.svg";
import Para from "../../assets/Paragraph.svg";
import Img from "../../assets/Image.svg";
import Code from "../../assets/Code.svg";
import Ordered from "../../assets/Ordered.svg";
import Unordered from "../../assets/Unordered.svg";
import Left from "../../assets/Left.svg";
import Right from "../../assets/Right.svg";
import Center from "../../assets/Center.svg";
const RTE = () => {
  return (
    <div className="widget">
      <div className="widgetContent">
        <p className="answer">Your answer</p>
        <div className="textArea">
          <div className="buttonsDiv">
            <div className="set1">
              <button>
                <img src={Bold} alt="" />
              </button>
              <button>
                <img src={Italic} alt="" />
              </button>
            </div>
            <div className="set2">
              <button>
                <img src={Link} alt="" />
              </button>
              <button>
                <img src={Para} alt="" />
              </button>
              <button>
                <img src={Img} alt="" />
              </button>
              <button>
                <img src={Code} alt="" />
              </button>
            </div>
            <div className="set3">
              <button>
                <img src={Ordered} alt="" />
              </button>
              <button>
                <img src={Unordered} alt="" />
              </button>
            </div>
            <div className="set4">
              <button>
                <img src={Left} alt="" />
              </button>
              <button>
                <img src={Center} alt="" />
              </button>
              <button>
                <img src={Right} alt="" />
              </button>
            </div>
          </div>
          <textarea
            className="RTE"
            name="RTE"
            rows={1}
            cols={50}
            placeholder="Start typing your answer"
          ></textarea>
        </div>
        <button className="post">Post Your Answer</button>
        <p className="policy">
          By clicking “Post Your Answer”, you agree to our <br />
          <a href="#"> terms of service</a> and <a href="#">privacy policy</a>
        </p>
      </div>
    </div>
  );
};

export default RTE;
