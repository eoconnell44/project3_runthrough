import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
  Grid, 
  Row,
  Col,
  FormControl,
  Button,
  FormGroup
} from 'react-bootstrap';

const styles = {
  margin: '0 auto',
  textAlign: 'center'
}
const main = {
  overflow: 'auto',
  padding: '10',
  margin: '30 auto'
}

export default class QA extends Component {
  constructor(props) {
    super(props)
    this.state = {sub: this.props.match.params.topic,
    							questionArr: [],
    							questions: []}

    this.renderData = this.renderData.bind(this);
    this.fetchData = this.fetchData.bind(this);
 }
 componentDidMount(){
 	this.fetchData(); 
 	this.renderData(); 
 }

   fetchData() {
    //Calls on all Questions + Answers related to topic
    let url = 'https://project-overflow-db.herokuapp.com/QA/' + this.state.sub;
    let arrayOfQ = [];
    axios.get(url).then((res) => {
      let store = res.data.data;
      this.setState({questions: store})
      //this.renderData(store)
      let qArr = store.map(q => {
      	if(!arrayOfQ.includes(q.question)){
      		arrayOfQ.push(q.question)
      	}
      		return arrayOfQ;
      })
    })
    this.setState({questionArr: arrayOfQ})
  }

   renderData(){
   	console.log('q', this.state.questions);
  	if(this.state.questionArr && this.state.questions){
  	let rendering = this.state.questions.map(e => 
  			<div style={styles} key={e.aquestion_id}>
            <h4><span>Q:</span> {e.question}</h4>

            <p><span>A:</span>{e.answer}</p>
           <hr/>
  			</div> 
  			);
  	console.log('rend', rendering);
  
  		return ( <div id='rendering' style={{margin: '0px auto'}}> {rendering} </div> )	
  }
}

 render(){
 	return (
 		<div>
 				<div id='layered' style={main}> {this.renderData()}  </div>
 		
 			</div>
 		)
 	}
}
