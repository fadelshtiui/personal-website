import React, { Component } from 'react';

class Emoji extends Component {

     render() {
          return (
               <button style={{ backgroundColor: this.props.darkMode ? '#2a2040' : 'white' }} onClick={this.props.onClick} className="not-button" id="toggle-mode">
                    <span
                         id="emoji"
                         style={{backgroundColor: this.props.darkMode ? '#2a2040' : 'white' }}
                         role="img"
                         aria-label={this.props.label ? this.props.label : ""}
                         aria-hidden={this.props.label ? "false" : "true"}
                    >
                         {this.props.symbol}
                    </span>
               </button>
               
          )
     }
}

export default Emoji;