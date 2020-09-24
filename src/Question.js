import React from 'react';
import "./Question.css"


function Question(props) {
  function handleClick(id, isTrue) {
    props.checkAnswer(id, isTrue);
  }

  function resetGame() {
    console.log('RESET')
    window.location.reload(false);
  }

  let answers;
  if (!props.finish) {
    answers = props.answers.map((el, i) => (
    <li 
      className='Question-answer fly'
      key={el.id}
      id={el.id}
      onClick={() => handleClick(i, el.isTrue)}
      style={{'--animation-order':` ${i + 2}`}}
      >
        {i + 1}. {el.content}
      </li>
    ))
  }
  
  

  return(
    !props.finish ? <ul className='Question'>
      <li 
        className='Question-question fly'
        order={0} 
        style={{'--animation-order': '1'}}
        key={props.question.id}
        >{ props.question.text } 
      </li>
      { answers }
    </ul> :
    <div className='Notice-container show' >
      <h1>Your score is {props.finalScore}</h1>
      <button className='reload' onClick={() => resetGame()}>Reload</button>
  </div>
  )
 
}


export default Question;