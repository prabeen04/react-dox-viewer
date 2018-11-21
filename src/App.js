import React, { Component } from 'react';
import './App.css';
import FileViewer from 'react-file-viewer';
import Sample from './static/sample.docx';
import Test from './static/test.pdf'
const file = Sample;
const type = 'docx'
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
