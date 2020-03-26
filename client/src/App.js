import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Icons from './Icons';
import Greeting from './Greeting';

class App extends Component {

     constructor(props) {
          super(props);
          this.state = {
               current: (<Greeting />),
               darkMode: false,
               courses: {},
               projects: {},
               experience: {}
          }
          this.fetchData();
     }

     fetchData() {
          this.getCourses();
          this.getExperience();
          this.getProjects();
     }

     toggleVisibility = (Component) => {
          this.setState({
               current: Component
          })
     };

     toggleMode = () => {
          if (this.state.darkMode) {
               this.updateBackground("white", "black", "linear-gradient(#c3b9d7,#a291c5)", "linear-gradient(#c3b9d7,#a291c5)");
          } else {
               this.updateBackground("transparent", "white", "none", "#2a2040");
          }
          this.setState((state) => ({
               darkMode: !state.darkMode
          }));
     }

     getCourses = async () => {
          try {
               let response = await fetch("/api/courses")
               if (!response.ok) {
                    return;
               }

               let object = await response.json();

               this.setState({
                    courses: object
               })
          } catch (e) {
               alert("There was an error contacting the server");
               console.log(e);
          }
     }

     getExperience = async () => {
          try {
               let response = await fetch("/api/experience")
               if (!response.ok) {
                    return;
               }

               let object = await response.json();

               this.setState({
                    experience: object
               })
          } catch (e) {
               alert("There was an error contacting the server");
               console.log(e);
          }
     }

     getProjects = async () => {
          try {
               let response = await fetch("/api/projects")
               if (!response.ok) {
                    return;
               }

               let object = await response.json();

               this.setState({
                    projects: object
               })
          } catch (e) {
               alert("There was an error contacting the server");
               console.log(e);
          }
     }

     updateBackground(background, color, image, backgroundColor) {
          document.body.style.backgroundColor = background;
          document.body.style.color = color;
          document.documentElement.style.backgroundImage = image;
          document.documentElement.style.backgroundColor = backgroundColor;
     }

     render() {
          return (
               <div id="body">
                    <Icons darkMode={this.state.darkMode} onClick={this.toggleMode} />
                    <NavBar projects={this.state.projects} experience={this.state.experience} courses={this.state.courses} darkMode={this.state.darkMode} onClick={this.toggleVisibility} />
                    {this.state.current}
               </div>
          );
     }
}

export default App;
