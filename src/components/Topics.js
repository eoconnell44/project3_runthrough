import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import {
  Image,
  Grid,
  Row,
  Col,
  FormControl,
  Button,
  FormGroup
} from 'react-bootstrap';

const styles = {
  textAlign: 'left',
  listStyle: 'none'
}

export default class Topics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: []
    }
  }
  componentDidMount() {
    console.log(this.props.match.path);
  }

  getAllDocuments(props) {
    let url = 'https://project-overflow-db.herokuapp.com/documentation';
    axios.get(url).then((res) => {
      let docs = res.data.data;
      docs.map((e, i) => {
        let doc = document.getElementById('docs');
        let link = document.createElement('a')
        let list = document.createElement('li');
        link.setAttribute('href', res.data.data[i].url);
        list.innerHTML = res.data.data[i].topic
        link.appendChild(list)
        doc.appendChild(link);
      })
    })
  }

  render() {
    return (
      <div style={{
        border: '4px solid yellow',
        display: 'inline',
        width: '200px'
      }}>
        <Grid style={{
          border: '1px solid blue'
        }}>
          <Row style={{
            height: '100',
            border: '2px solid black'
          }}></Row>
          <Row>
            <Col style={{
              border: '4px solid green'
            }} xs={4} md={2}>
              <ul style={styles} id='docs'>{this.getAllDocuments()}
              </ul>
            </Col>
          </Row>

        </Grid>

      </div>
    )
  }
}