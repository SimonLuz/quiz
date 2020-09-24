import React from 'react';
import './Notice.css';


function Notice(props) {
  console.log('NOTICE', props)
    
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

    /* if (props.finish) {
      noticeText = <p className='Notice-text'>
        <span>Thats it!</span>
        Your score is {props.score}
      </p>
    } */
  // console.log(noticeText)


  return(
    <div className={`Notice-container ${props.show ? 'show' : '' } `} >
      {noticeText}
    </div>
  )
}

export default Notice;