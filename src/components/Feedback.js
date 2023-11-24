import React from 'react';
import './Feedback.css';
import {HiOutlineArrowRight} from 'react-icons/hi';

function Feedbackcomponent() {

  return (
    <div className="feedback">
      <div className="part12">
        <p>Questions or comments? Let us know what we are doing well and where we went wrong.</p>
      </div>
      <div className="part2">
        <button className='feedback-button'>Provide Feedback <HiOutlineArrowRight /></button>
      </div>
    </div>
  );
}

export default Feedbackcomponent;
