import React from 'react';
import './Notice.css';


function Notice(props) {
console.log('NOTICE', props)
  return(
    <div className={`Notice-container ${props.show ? 'show' : '' } `} >
      <p className='Notice-text'>
        <span>Congratulation!!!</span>
        This is the correct answer
      </p>
    </div>
  )
}

export default Notice;