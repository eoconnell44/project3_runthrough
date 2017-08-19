import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Topics from './components/Topics';
import Login from './components/Login';
import SingleQuestion from './components/SingleQ';
import Search from './components/Search';
import QA from './components/QA';

import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: [],
      allQuestions: [],
      search: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = document.getElementById('newVal').value.toLowerCase();
    let cap = query.charAt(0).toUpperCase()
    let x = query.slice(1)
    let compo = cap + x
    console.log('Upper case working--.', compo);
    this.setState({search: query})
    console.log(this.state);
    window.location.assign('/topics/' + query)
  }

  render() {
    return (

      <Router>
        <div>
          <div class="page-wrap">
            <Header onSubmit={(event) => this.handleSubmit(event)}/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path='/login' component={Login}/> {/* <Route exact path='/topics' component={Topics}/> */}
              <Route exact path='/:subject/answers/:id' component={SingleQuestion}/>
              <Route exact path='/topics/:topic' component={Search}/>
              <Route exact path='/topics/:topic/qa' sub="react" component={QA}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
