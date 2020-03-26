import React, { Component } from 'react';
import './App.css';

class Contact extends Component {

     constructor(props) {
          super(props);
          this.state = {
               message: "",
               math: "",
               mathError: ""
          }
     }

     send = async () => {
          try {
               let response = await fetch(encodeURI('/api/email/' + this.state.message + '/' + this.state.math));
               if (!response.ok) {
                    console.log("Please double check your internet connection and try again.");
                    return;
               }
               let object = await response.json();
               this.setState({
                    mathError: object.mathError
               })
               if (object.mathError === '') {
                    alert("Thanks for reaching out!");
               }
          } catch (e) {
               alert("There was an error contacting the server. Please try again later.");
               console.log(e);
          }
     }

     updateMessage = (event) => {
          this.setState({
               message: event.target.value
          })
     }

     updateMath = (event) => {
          this.setState({
               math: event.target.value
          })
     }

     render() {
          return (
               <div id="contact-content" className="section">
                    <h2>
                         <span className="tag">{'<'}h2{'>'}</span> 
                              Message: 
                         <span className="tag">{'<'}/h2{'>'}</span>
                    </h2>
                    <textarea onChange={this.updateMessage} value={this.state.message} rows="10" cols="50" placeholder="Your messsage..."></textarea>
                    <h2>
                         <span className="tag">{'<'}h2{'>'}</span> 
                              What's 2 + 2? 
                         <span className="tag">{'<'}/h2{'>'}</span>
                    </h2>
                    <input onChange={this.updateMath} value={this.state.math} type="number" placeholder="I'm not a robot!" />
                    <span className="error">{this.state.mathError}</span>
                    <div>
                         <button onClick={this.send} id="submit">Send</button>
                    </div>
               </div>
          );
     }
}

export default Contact;