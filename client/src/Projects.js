import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
     render() {
          return (
               <div id="projects-content" className="section">
                    {this.props.projects.map(project => 
                         <div key={project.title}>
                              <h2>
                                   <span className="tag">{'<'}h2{'>'}</span>
                                   <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                   <span className="tag">{'<'}/h2{'>'}</span>
                              </h2>
                              <p>
                                   <span className="tag">{'<'}p{'>'}</span>
                                        {project.description}
                                   <span className="tag">{'<'}/p{'>'}</span>
                              </p>
                         </div>)}
               </div>
          );
     }
}

export default Projects;