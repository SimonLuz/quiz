import React from 'react';
import './Notice.css';


function Notice(props) {
    
  let noticeText; 
    if (props.correctAnswer && !props.finish) {
      noticeText = <p className='Notice-text'>
        <span>Good job!!!</span>
        
      </p>
     } else if (!props.correctAnswer && !props.finish) {
      noticeText = <p className='Notice-text'>
        <span>Sorry!!!</span>
        That's not quite right
      </p>
    }

  return(
    <div className={`Notice-container ${props.show ? 'show' : '' } `} >
      {noticeText}
    </div>
  )
}

export default Notice;