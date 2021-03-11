import React, { Component } from 'react';
import Question from './Question';
import Notice from './Notice';
import { uuid } from 'uuidv4';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      counter: 0,
      readyToStart: false,
      showNotice: false,
      correctAnswer: null,
      finish: false,
      score: 0
    }

    this.handleCheckAnswer = this.handleCheckAnswer.bind(this);
  }  
    
  handleCheckAnswer(id, isTrue) {
    const score = isTrue ? 1 : 0;
    this.setState(st => ({ 
      showNotice: true, 
      correctAnswer: isTrue,
      score: score
    }));
    
    setTimeout(() => {
      this.setState(st => ({
        counter: st.counter++, 
        showNotice: false,
      }))
    }, 3000)
   
  }


  componentDidMount() {
    let newData;
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
          newData = data.map(el => (
          { ...el, 
            question: {text: el.question, id: uuid()},
            answers: el.answers.map(an => (
              {...an, id: uuid() }
            ))
          }
          )) 

        this.setState({
          questions: newData,
          readyToStart: true,
        })
    })
  }

  render() {
    let gitPractice2 = 'Variable created on Simon Laptop in App.js'
    let simPrawy1 = '1. SimPrawy code';
    let gitPractice3 = '1. Simon\'s Laptop';
    let start;
    let finish = this.state.counter === this.state.questions.length ? true : false;
    const currQ = this.state.questions[this.state.counter];
    let finalScore = `${this.state.score}/${this.state.questions.length}`;


    if (this.state.readyToStart) {
      start = (
        // <div>
          <Question 
            {...currQ }
            checkAnswer={ this.handleCheckAnswer }
            readyToStart={ this.state.readyToStart }
            finish={finish}
            finalScore={finalScore}
          /> 
      )
    } else { 
      start = (
      <div> NOT READY </div>
    )}

    return (
      <div className="App">
        <Notice 
          show={this.state.showNotice}
          finish={this.state.finish}
          correctAnswer={this.state.correctAnswer}
          finalScore={finalScore}
        />
        {start}
      </div> 
    );
  }
  
}

export default App;
