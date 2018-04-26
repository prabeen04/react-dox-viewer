import React, { Component } from 'react';
import './App.css';
import FileViewer from 'react-file-viewer';

const file = 'https://cdn-images-1.medium.com/max/2000/1*6eZhQJdQ_t71DRSoSuUhbA.jpeg'
const type = 'jpeg'
class App extends Component {
  render() {
    return (
      <div className="App">
       <FileViewer
        fileType={type}
        filePath={file}/>
      </div>
    );
  }
}

export default App;
