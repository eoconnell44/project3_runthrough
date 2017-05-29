import React, {Component} from 'react';

const Instructs = () => {
  return <div style={styles}>
    <h2 style={{
      textAlign: 'center'
    }}>
      Welcome to ProjectOverflow!
    </h2><hr style={{
    width: '50%'
  }}/>
    <p style={para}>
      Project Overflow is the end all be all site for all questions, answers, and resources related to getting started and learning web development. The founders completed General Assembly's Web Development Immersive course with future students in mind, dealing with all hurdles and obstacles that are to be expected from young devs alike. Be an active or passive contributor as much as you wish. Enjoy!
    </p>
    <p style={para}>
      To learn more click on the About tab above.</p>
  </div>
}
const styles = {
  fontSize: '28'
}
const para = {
  fontSize: '24',
  margin: '10px 15%',
  textAlign: 'center',
  padding: '50',
  width: '70%'
}
class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<Instructs/>)
  }
}
export default Home;