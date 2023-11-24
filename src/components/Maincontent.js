import React from 'react';
import './Maincontent.css';
import {PiCaretRight} from "react-icons/pi"


function MainComponent(){
  const progressPhase1 = 30; 
  const progressPhase2 = 30; 
  const progressPhase3 = 30;
    return (
      <div className="main-content">
        <div className="content">
     <p className="breadcrumb">Back <PiCaretRight className='arrow'/> Prepare & Execute Functional Testing</p>
     <button class="button">Method</button>
     <p className="title">Prepare & Execute Functional <br/> Testing</p>
     <p className='phase'>Phase</p>
        <div className="phasenames-container">
          <p className="phasenames">Plan & Develop</p>
          <p className="phasenames">Design & Implement </p>
          <p className="phasenames">Run & Evolve</p>
        </div>
        
        {/* Container for progress bars below "phasenames" */}
        <div className="progress-bars-container">
          <div className="progress-bar pg" style={{ width: `${progressPhase1}%` }}></div>
          <div className="progress-bar" style={{ width: `${progressPhase2}%` }}></div>
          <div className="progress-bar" style={{ width: `${progressPhase3}%` }}></div>
        </div>
   </div>
        </div>
      
    );
  };
  

export default MainComponent;