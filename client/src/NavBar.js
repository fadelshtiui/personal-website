import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Games from './Games';

class NavBar extends Component {
     render() {
          return (
               <div>
                    <h1>
                         <button style={{backgroundColor: this.props.darkMode ? '#2a2040' : 'white', color: this.props.darkMode ? 'white' : 'black'}} id="home" className="not-button" onClick={() => this.props.onClick(<Greeting />)}>
                              Fadel Shtiui
                         </button>
                    </h1>
                    <header>
                         <ul>
                              <li className="tag">{'<'}nav{'>'}</li>
                              <li id="projects">
                                   <button onClick={() => this.props.onClick(<Projects projects={this.props.projects} />)}>projects</button>
                              </li>
                              <li id="experience">
                                   <button onClick={() => this.props.onClick(<Experience experience={this.props.experience} courses={this.props.courses} />)}>experience</button>
                              </li>
                              <li id="contact">
                                   <button onClick={() => this.props.onClick(<Contact />)}>contact</button>
                              </li>
                              <li id="games">
                                   <button onClick={() => this.props.onClick(<Games />)}>games</button>
                              </li>
                              <li className="tag">{'<'}/nav{'>'}</li>
                         </ul>
                    </header>
               </div>
          );
     }
}

export default NavBar;