import React, {Component} from 'react';
import axios from 'axios';
import {Grid, Row, Col, FormControl, Button, FormGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  constructor(props) {
    super(props)
    let top = this.props.match.params.topic
    this.state = {
    	questions: [],
    	answers: [],
    }
    this.renderAll = this.renderAll.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.handleSubmitQ = this.handleSubmitQ.bind(this);
    // this.findQuestionId = this.findQuestionId.bind(this);
  }
  componentDidMount(){
  	this.renderQuestions();
  	this.renderAll();
  	this.state = {
  		search: this.props.match.params.topic.toUpperCase(),
  		qtopic_id: 0,
  	}
  }
  renderQuestions(){
  	let url = 'https://dbprojrunthrough.herokuapp.com/QA/' + this.props.match.params.topic;

  	axios.get(url)
  	.then((res) => {
  		let store = res.data.data
  		console.log('SHOW ME THE STORED DATA==>', store);
  		this.setState({
  			questions: store,
  			resource: [],
  		})
  			console.log('WHat this show? Only state??', this.state);
  			this.renderAll()
  	})
  }

  renderAll(){
  	//store all rendered values to prevent dupes
  	let rendered = []

  	if (this.state.questions !== undefined) {
  	let render = this.state.questions.map((e) => {
  		console.log('Return the MAPPING===>', e);
  		if(rendered.indexOf(e.question)){
  			rendered.push(e.question)
  			
  			return ( <div> <Link to={`/${e.question_sub}/answers/${e.qquestion_id}`}> <h4 key={e.qquestion_id}> {e.question} </h4> </Link> <h6> {e.answer} </h6> </div> )
  		} else {
  			return ( <div> <h6> {e.answer} </h6> </div> )
  		}
  	});
  	return render;
  }
}
/*	findQuestionId(){
		let word = this.state.search.toLowerCase();
		let id = this.state.qtopic_id 
	switch(word) {
  case 'javascript': id = 1;
  break;
    case 'express': id = 2;
  break;
    case 'react': id = 3;
  break;
    case 'node': id = 4;
  break;
		}
		this.setState({
			qtopic_id: id
		})	
	}*/
  						
	handleSubmitQ(e){
		e.preventDefault();
		// this.findQuestionId()  Swtich was working but not setting New State ID????
		console.log('SHOW ME STATE ID', this.props);
		let newQuestion = document.getElementById('qVal').value;
		let sub = this.state.search.toLowerCase();
		let id = this.state.qtopic_id 
		
		switch(sub) {
			case 'javascript': id = 1;
			break;
			case 'express': id = 2;
			break;
			case 'react': id = 3;
			break;
			case 'node': id = 4;
			break;
		}
		console.log('TALK TO ME ABOUT NEW ID DOG===>', id);
		console.log('HERES The new SUB & ID -->', typeof sub, sub, id);
		let url = 'https://dbprojrunthrough.herokuapp.com/questions';
		// let url = 'https://dbprojrunthrough.herokuapp.com/QA/' + sub
		axios.post(url, {
			question: newQuestion,
			qtopic_id: id,
			question_sub: sub,
		})
		// this.renderAll();
	}
	


render(){
	return(
		<div>
			<h1> {this.state.search} </h1>
					<form onSubmit={this.handleSubmitQ}>
						<FormGroup >
						<FormControl style={{border:'5px lightgray solid'}} id='qVal' type="text" placeholder="Question"/>
						</FormGroup>
					</form>  			
			<div> {this.renderAll()} </div>
		</div>
		)
 }
}