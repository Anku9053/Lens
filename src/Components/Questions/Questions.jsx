import React, { useState } from 'react';
import './Question.css';
import { FaArrowDown } from "react-icons/fa";

export const Questions = () => {
    const [showAnswers, setShowAnswers] = useState(Array(6).fill(false));
    const toggleAnswer = (index) => {
      setShowAnswers((prevState) => {
        const updatedAnswers = [...prevState];
        updatedAnswers[index] = !updatedAnswers[index];
        return updatedAnswers;
      });
    };
  

      const calculatetextalign = ()=>{
        if (window.innerWidth <= 600) {
          return "300%"; 
      } else {
          return "100%"; 
      }
      }
      const initialtextalign = calculatetextalign();
    
  
  

  return (
    <div style={{marginTop:"5rem"}}>
      <div>
        <h1 className="text-white text-center text-2xl font-semibold" style={{ textTransform: 'uppercase' }}>GET TO KNOW US
        </h1>
      </div>
      <div className="w-20 mx-auto mt-2 h-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-300"></div>

      <div>
        <h2 style={{ color: "white", textAlign: "center", fontSize: initialtextalign, fontStyle: "normal", fontWeight: "500", lineHeight: "normal", width: "65%", margin: "auto", marginTop: "2rem" }}>
          Frequently Asked Questions
        </h2>
      </div>

      <div className="question-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="question-item">
            <div className="question" onClick={() => toggleAnswer(index)} style={{ display: "flex", justifyContent: "space-between", color: "white", border: "1px solid white", fontSize: "20px" }}>
              Do I need to Sign a contract <span style={{marginTop:"0.2rem"}}><FaArrowDown /></span>
            </div>
            <div className={`answer ${showAnswers[index] ? 'open' : 'closed'}`} style={{ color: "white" }}>
              We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
