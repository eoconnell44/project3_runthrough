import React, {Component} from 'react';
import axios from 'axios';
import {
  Grid,
  Row,
  Col,
  FormControl,
  Button,
  FormGroup
} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const styles = {
  // overflow: 'scroll'
}


export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: [],
      docs: [],
      search: this.props.match.params.topic.toUpperCase(),
      qtopic_id: 0
    }
    this.renderAll = this.renderAll.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.handleSubmitQ = this.handleSubmitQ.bind(this);
    this.renderDocs = this.renderDocs.bind(this);
  }

  componentDidMount() {
    this.renderQuestions(); //Render data on page load
    this.renderAll();
    this.renderDocs();
  }
  renderQuestions() {
    //Calls on all Questins + Answers related to topic
    let url = 'https://project-overflow-db.herokuapp.com/questions/' + this.props.match.params.topic;
    axios.get(url).then((res) => {
      let store = res.data.data
      this.setState({questions: store})
    })
  }

  renderAll() {
    let rendered = [];
    let render = this.state.questions.map(e => {

      return (
        <Row>
          <Col style={styles} xs={4} md={2}></Col>
          <Col style={styles} xs={4} md={3}>
            <Link to={`/${e.question_sub}/answers/${e.qquestion_id}`}>
              <h4 key={e.qquestion_id}>
                {e.question}
              </h4>
            </Link>
          </Col>
          <Col style={styles} xs={4} md={5}>
            <h5>
              {e.qdate_added.slice(0, 10)}
            </h5>
          </Col>

        </Row>
      )
    })
    return (
      <Grid>
        {render}
      </Grid>
    )
  }

  handleSubmitQ(e) {
    e.preventDefault();
    console.log('SHOW ME STATE ID', this.props);
    let newQuestion = document.getElementById('qVal').value;
    let sub = this.state.search.toLowerCase();
    let id = this.state.qtopic_id
    //Assign topics to a number to querying purposes
    switch (sub) {
      case 'javascript':
        id = 1;
        break;
      case 'express':
        id = 2;
        break;
      case 'react':
        id = 3;
        break;
      case 'node':
        id = 4;
        break;
    }
    let url = 'https://project-overflow-db.herokuapp.com/questions';
    if (newQuestion !== "") {
      axios.post(url, {
        question: newQuestion,
        qtopic_id: id,
        question_sub: sub
      })
      .then((res) => {
         window.location.reload();
     })
    }
    document.querySelector('#qVal').value = "";
  }
  sendtToQuestion(){
    console.log('fuction working???');
    let sub = this.props.match.params.topic;
    let dataId = document.querySelector('[data-id]')
    let qId =  1 + parseInt(dataId.getAttribute('data-id'))
    // window.location.assign(`/topics/${sub}/${qId}`)
    console.log('Show me the idddddd==>', qId);
  }

  renderDocs() {
    let sub = this.props.match.params.topic;
    let url = 'https://project-overflow-db.herokuapp.com/documentation/' + sub;
    axios.get(url).then(res => {
      this.setState({docs: res.data.data})
    })
  }

  render() {
    //Docs will only render if they are loaded into state
    let docsRender = this.state.docs.length && this.state.docs.map(e => {
      return <div>
        <a href={e.url} target='_blank'>
          {e.topic}
        </a>
      </div>
    })
    return (
      <div id='sticky-footer'>
        <Grid >
          <Row>
            <h1>
              {this.state.search}
            </h1>
          </Row>
          <Row>
            <form onSubmit={this.handleSubmitQ}>
              <FormGroup >
                <FormControl style={{
                  border: '5px lightgray solid'
                }} id='qVal' type="text" placeholder="Question"/>
              </FormGroup>
            </form>
          </Row>
          <Row>
            <Col style={styles} xs={4} md={2}>
              <h2>
                Documents
              </h2>
              <div id='documentation-list'>
                {docsRender}
              </div>

            </Col>
            <Col style={styles} xs={4} md={7}>
              <h2>
                Questions
              </h2>
              {this.renderAll()}
            </Col>
            <Col style={styles} xs={4} md={3}>
              <h2 id='date'>
                Date Added
              </h2>
            </Col>
          
          </Row>
        </Grid>
        <div id='sticky-footer'></div>
      </div>
    )
  }
}

