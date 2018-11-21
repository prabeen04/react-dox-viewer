import React, { Component } from 'react'

class Excel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            excelData: [
                {
                    columns: ["Name", "Salary", "Sex"],
                    data: [
                        ["Johnson", 30000, "Male"],
                        ["Monika", 355000, "Female"],
                        ["Konstantina", 20000, "Female"],
                        ["John", 250000, "Male"],
                        ["Josef", 450500, "Male"],
                    ]
                },
                {
                    xSteps: 1, // Will start putting cell with 1 empty cell on left most
                    ySteps: 5, //will put space of 5 rows,
                    columns: ["Name", "Department"],
                    data: [
                        ["Johnson", "Finance"],
                        ["Monika", "IT"],
                        ["Konstantina", "IT Billing"],
                        ["John", "HR"],
                        ["Josef", "Testing"],
                    ]
                }
            ]
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