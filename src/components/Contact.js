import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';

const title = {
  fontSize: '36',
  textAlign: 'center',
  margin: '2.5%'
}

const styles = {
  height: '200',
  width: '200',
  margin: '2.5%'
}

const profileImages = (
  <Grid>
    <Row>
      <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}>

      </Col>
      <Col xs={6} md={4}>

      </Col>
    </Row>
  </Grid>
);

const socialTabs = (<img style={{
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  margin: '5px'
}} src='https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300'/>)

const github = (<img style={{
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  margin: '5px'
}} src='https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png'/>)

const personal = (<img style={{
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  margin: '5px'
}} src='https://www.microsoft.com/en-us/research/wp-content/themes/microsoft-research-theme/images/blank-avatar.png'/>)

const bioDetails = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://i1356.photobucket.com/albums/q732/oconnelle3/dash_zpsrcuwn7si.jpeg" circle/>
        <ul style={{
          listStyle: 'none'
        }} sm={6} md={3}>
          <li>Name: Dashiell</li>
          <li>Username: Dashy10</li>
          <li>
            <a href='https://www.linkedin.com/in/dashiell-lumas-19a667106/'>
              {socialTabs}
            </a>
            <a href='https://github.com/Dashy10'>
              {github}
            </a>
            {personal}
          </li>
          <p>"Full CRUD by today guys?"</p>
        </ul>
      </Col>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://i1356.photobucket.com/albums/q732/oconnelle3/linkedinpic_zpsgjmixare.jpg" circle/>
        <ul style={{
          listStyle: 'none'
        }} xs={6} md={4}>
          <li>Name: Ed</li>
          <li>Username: loRem</li>
          <li>
            <a href='https://www.linkedin.com/in/edmondoconnell/'>
              {socialTabs}</a>
            <a href='https://github.com/eoconnell44'>
              {github}
            </a>
            {personal}
          </li>
          <p>In the back of the area where the Michael Scott paper company, the quote can be seen written on the white board "You miss 100% of the shots you don't take. -Wayne Gretzky -Michael Scott"</p>
        </ul>
      </Col>
      <Col xs={6} md={4}>
        <Image style={styles} src="http://i1356.photobucket.com/albums/q732/oconnelle3/kyle_zpssro6q31i.jpeg" circle/>
        <ul style={{
          listStyle: 'none'
        }} xs={6} md={4}>
          <li>Name: Kyle
          </li>
          <li>Username: RockyDennis1</li>
          <li>
            <a href='https://www.linkedin.com/in/kyle-frable-6978b267/'>
              {socialTabs}</a>
            <a href='https://github.com/Kfrable'>
              {github}
            </a>
            {personal}
          </li>
          <p>"Its not rocket surgery."</p>
        </ul>
      </Col>
    </Row>
  </Grid>
);

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='flex-wrapper'>
        <h2 style={title}>
          Meet The Team
        </h2>
        {profileImages}
        {bioDetails}

      </div>

    )
  }
}

export default Contact;