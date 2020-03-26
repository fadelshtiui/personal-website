import React, { Component } from 'react';
import './App.css';

class Experience extends Component {    

     render() {
          return (
               <div id="experience-content" className="section">
                    {this.props.experience.map(entry => 
                         <div key={entry.title}>
                              <h2>
                                   <span className="tag">{'<'}h2{'>'}</span>
                                        {entry.title}
                                   <span className="tag">{'<'}/h2{'>'}</span>
                              </h2>
                              <div>
                                   <p>
                                        <span className="tag">{'<'}p{'>'}</span>
                                             {entry.description}
                                        <span className="tag">{'<'}/p{'>'}</span>
                                   </p>
                              </div>
                         </div>)}
                    <span className="spacer"></span><span className="tag">{'<'}ul{'>'}</span>
                    <ul id="courses">
                         {this.props.courses.map(entry => 
                              <li key={entry.course}>
                                   <span className="tag">{'<'}li{'>'}</span>
                                        {entry.course}
                                   <span className="tag">{'<'}/li{'>'}</span>
                              </li>)}
                    </ul>
                    <span className="spacer"></span><span className="tag">{'<'}/ul{'>'}</span>
               </div>
          );
     }
}

export default Experience;