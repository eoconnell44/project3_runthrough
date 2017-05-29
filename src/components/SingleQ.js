import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleQ extends Component {
	constructor(props){
		super(props)
		// console.log('show props--->', props.match.params.id);
		// console.log('show state--->', props.match.params.subject);
	}

	componentDidMount(){
		// this.renderQuestion();
	}

	renderQuestion(){
		let id = parseInt(this.props.match.params.id)
		let url = 'https://dbprojrunthrough.herokuapp.com/QA/'
		axios.get(url)
		.then((res) => {
			let data = res.data.data;
			data.map((e) => {
				if(e.qquestion_id === id){
					console.log(e);
					return (
							<div> {e.question} </div>
						)
				 	}
			})
		})
	}
	


    render(){
    	return(
    		<div> 
    		<h1>hello</h1> 
    		{this.renderQuestion()}
    		</div>
    		)
    }
}