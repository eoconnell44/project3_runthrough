import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

class Topics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: []
    }
    this.getAllDocuments = this.getAllDocuments.bind(this)
  }
  componentDidMount() {

    this.getAllDocuments();
    /*axios
    .get('https://project-overflow-db.herokuapp.com/documentation')
    .then(res => this.setState({ resource: res.data }))*/
  }

  getAllDocuments() {
    let url = 'https://dbprojrunthrough.herokuapp.com/documentation';
    axios.get(url)
    .then((res) => {
    let docs = res.data.data;
    let getdocs = docs.map((e) => {
      // console.log(e.topic);
      return (
        <div> {e.topic} 
        </div> 
        )
    })
    return ( <div> {getdocs} </div> )
  })
}

  render() {
    return (
      <div>
        <h1>Documentation</h1>
        <div> {this.getAllDocuments()} </div>



        <Switch>
          <Route exact path='/' component={Topics} />
          <Route exact path='/topics/:topic' component={Search} />
        </Switch>
      </div>
    )
  }
}

export default Topics;