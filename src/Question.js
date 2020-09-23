import React from 'react';
import "./Question.css"


function Question(props) {
console.log(props)
  function handleClick(id, isTrue) {
    console.log('handleClick', isTrue);
    props.checkAnswer(id, isTrue);
  }

  const answers = props.answers.map((el, i) => (
    <li 
      className='Question-answer fly'
      key={(i + 1) * Math.random()}
      id={i}
      onClick={() => handleClick(i, el.isTrue)}
      style={{'--animation-order':` ${i + 2}`}}
      >
        {i + 1}. {el.content}
      </li>
    )
  )


  return(
    <ul className='Question'>
      <li 
        className='Question-question fly'
        order={0} 
        style={{'--animation-order': '1'}}
        key={Math.random()}
        >{ props.question } 
      </li>
      { answers }
    </ul>
  )
 
}


export default Question;