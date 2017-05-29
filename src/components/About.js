import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
 

const gridInstance = (
  <Grid style={{margin: '1%', padding: '5%'}}>
    <Row className="show-grid">
      <Col className='aboutCols' xs={6} md={4} style={{borderRight:'1px solid black'}}> 
        <img style={{height: '100', width: '100'}} src='https://image.freepik.com/free-icon/question-mark_318-52837.jpg' alt='question mark'></img>
        <h2 style={{borderBottom: '1px solid black', padding: '1%'}}> How to Search </h2> 
        <ol>
          <li> User can enter a topic or keyword in the search bar above </li>
          <li> CLick on the 'Topics" Dropdown menu and select the desired subject</li>
          <li> Once on the topics page, all related questions will be displayed </li>
          <li> User can submit a question which will be posted to the given subjects page </li>
        </ol>
      </Col>
      <Col className='aboutCols' xs={6} md={4}>  
      <img style={{height: '100', width: '100'}} src='http://img2.wikia.nocookie.net/__cb20130117173952/clubpenguin/images/7/7c/Exclamation_Point_Emoticon.PNG?w=240' alt='exclamation mark'></img>
      <h2 style={{borderBottom: '1px solid black', padding: '1%'}}> How to Answer </h2> 
        <ol>
          <li> While on the topics page user can click the + button to add an answer to a question </li>
          <li> User may also upvote an answer they see fitting for the question </li>
          <li> Alternatively, the downvote option is to be used for users' answers that do not correclty answer a questions</li>
        </ol>
      </Col>
    </Row>
  </Grid>
  )
class About extends Component {

  render() {
    return (
      <div className='flex-wrapper-info'>
        {gridInstance}
      </div>
    )
  }
}
export default About;