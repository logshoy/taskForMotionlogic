import React from 'react';
import Forminput from './forminput/forminput'
// import Search from './forminput/search'
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <Search /> */}
      <Forminput />
    </div>
  );
  }
}

export default App;
