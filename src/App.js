import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import FrameworkListItem from './components/frameworkListItem'
import AddFramework from './components/addFramework'
import MasterDetailView from './components/masterDetailView'
let name = "DBS React DEMO"
let frameworks = [{
  name: 'React',
  description: 'A library'
},
{
  name: 'Angular',
  description: 'A framework'
}, {
  name: 'VUE',
  description: 'A framework'
}, {
  name: 'AngularJS',
  description: 'A framework'
}, {
  name: 'Ember',
  description: 'A framework'
}, {
  name: 'jQuery',
  description: 'hmmm'
}]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar name={name} textColor={"white-text"} />
        <MasterDetailView items={frameworks} />
      </div>
    );
  }
}

export default App;
