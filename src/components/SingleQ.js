
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const style = {
  margin: 'auto',
  marginTop: '20px',
  display: 'table'
}

export default class SingleQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aquestion_id: [],
      atopic_id: [],
      question: '',
      answer: [],
      edit: false,
      answer_id: []
    }

    this.answering = this.answering.bind(this)
    this.editAnswer = this.editAnswer.bind(this)
    this.deleteAnswer = this.deleteAnswer.bind(this)
  }
  // use this to retrieve all questions
  componentDidMount() {
    let id = parseInt(this.props.match.params.id)
    let url = 'https://project-overflow-db.herokuapp.com/QAS/' + id
    axios.get(url).then((res) => {
      console.log(res.data.question[0]);
      this.setState({data: res.data.question[0], question: res.data.question[0].question, answer: res.data.answer})

    });
  }

  answering() {
    let url = 'https://project-overflow-db.herokuapp.com/answers'
    let response = document.getElementById('answer').value
    let id = this.props.match.params.id
    if (response !== "") {
      axios.post(url, {
        answer: response,
        aquestion_id: id
      }).then((res) => {
        window.location.reload();
      })
    }
    document.querySelector("#answer").value = "";
  }
  // binding
  editAnswer() {
    this.setState({edit: true})
    let id = this.props.match.params.id;
  }

  deleteAnswer() {
    let id = this.props.match.params.id;
    console.log(id);
    axios.delete('https://project-overflow-db.herokuapp.com/answers/' + id, {
      answer_id: id
    })
    window.location.reload();
  }
  render() {
    return (
      <div>
        <div id='holder'>
          <h2 id='single-question'>{this.state.question}</h2>
          {this.state.answer.map((res) => {
            if (!this.state.edit) {
              return (
                <div className='answer-container'>
                  <p className='answer-list'>{res.answer}</p>
                  {/* <button onClick={() => this.editAnswer()}>Edit</button> */}
                  <button onClick={() => this.deleteAnswer()}>Delete</button>
                </div>
              )
            } else {
              return (
                <div className='answer-container'>
                  <input id='edit-answer' type='text' placeholder={res.answer}/>
                  {/* <button onClick={() => this.editAnswer()}>Edit</button> */}
                  <button onClick={() => this.deleteAnswer()}>Delete</button>
                </div>
              )

            }

          })
}
        </div>
        <div style={style}>
          <input id='answer' type='text' placeholder='Answer'/>
          <button className="button-margin" onClick={this.answering}>Submit</button>

        </div>
        <div id='sticky-footer'></div>
      </div>
    )
  }
}