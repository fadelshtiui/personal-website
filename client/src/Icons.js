import React, { Component } from 'react';
import './App.css';
import Emoji from './Emoji'

class Icons extends Component {
     render() {
          return (
               <div>
                    <div className="loading-icon fadeOut"></div>
                    <div id="icon-container">
                         <a href="https://www.linkedin.com/in/fadelshtiui" target="_blank" rel="noopener noreferrer">
                              <i id="linkedin" className="fa fa-linkedin-square" style={{ color: this.props.darkMode ? 'white' : '#2a2040' }}></i>
                         </a>
                         <a href="https://www.github.com/fadelshtiui" target="_blank" rel="noopener noreferrer">
                              <i id="code" className="fa fa-github" style={{ color: this.props.darkMode ? 'white' : '#2a2040' }}></i>
                         </a>
                         <Emoji darkMode={this.props.darkMode} onClick={this.props.onClick} symbol={this.props.darkMode ? '🌙' : '☀️'}></Emoji>
                    </div>
               </div>
               
          );
     }
}

export default Icons;