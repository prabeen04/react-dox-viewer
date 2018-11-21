import React, { Component } from 'react'

class Excel extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleExcelExport = () => {
        console.log('data')
    }
    render() {
        return (
            <div>
                <h1>Export Excel File</h1>
                <button onClick={this.handleExcelExport}>Export Excel</button>
            </div>
        )
    }
}

export default Excel;