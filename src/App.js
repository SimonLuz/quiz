import React, { Component } from 'react';
import Question from './Question';
import Notice from './Notice';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      counter: 0,
      readyToStart: false,
      showNotice: false,
    }

    this.handleCheckAnswer = this.handleCheckAnswer.bind(this);
  }  
    
  handleCheckAnswer(id, isTrue) {
    // console.log(id, isTrue)
    this.setState({ showNotice: true });
    
    setTimeout(() => {
      this.setState(st => ({
        counter: st.counter++, 
        showNotice: false,
      }))
    }, 3000)
   
  }

  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          questions: data,
          readyToStart: true,
        })
      })
  }

  render() {
    let start;
    const currQ = this.state.questions[this.state.counter];

    if (this.state.readyToStart) {
      start = (
        <div>
          <h1>Jestesmy</h1>
          <Question 
            {...currQ }
            checkAnswer={ this.handleCheckAnswer }
            readyToStart={ this.state.readyToStart }
          /> 
        </div>
      )
    } else { 
      start = (
      <div> NOT READY </div>
    )}

    return (
      <div className="App">
        <Notice show={this.state.showNotice}/>
        {start}
      </div> 
    );
  }
  
}

export default App;
