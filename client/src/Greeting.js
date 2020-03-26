import React, { Component } from 'react';
import './App.css';
import ReactTypingEffect from 'react-typing-effect';

class Greeting extends Component {

     constructor(props) {
          super(props);
          this.hello = React.createRef();
     }

     render() {
          return (
               <div id="welcome-content" className="section">
                    <ReactTypingEffect speed={65} text="Hey there! This full-stack React web app (with a Node.js REST API and remote mySQL integration) was built and deployed on Azure. Click on the sun emoji if the screen is too bright!" />
               </div>
          );
     }
}

export default Greeting;