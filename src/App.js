import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import Search from './components/Search';
import SingleQ from './components/SingleQ';

import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      compo: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let query = document.getElementById('newVal').value.toLowerCase();
    let cap = query.charAt(0).toUpperCase()
    let x = query.slice(1)
    let compo = cap + x
    console.log('Upper case working--.', compo);
    this.setState({
      search: query,
      compo: compo
    })
    console.log(this.state);
    window.location.assign('/topics/' + query)
  }
  render() {
    return (
      <Router>
      <div>
        <Header onSubmit={(event) => this.handleSubmit(event)} />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path='/topics' component={Topics} />
            <Route exact path='/:subject/answers/:id' component={SingleQ} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
