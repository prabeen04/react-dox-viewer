import React, { Component } from 'react';
import './App.css';
import FileViewer from 'react-file-viewer';

const file = 'https://www.waterproofpaper.com/printable-calendar/2018-printable-calendar.pdf';
const type = 'pdf'
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
