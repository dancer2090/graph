import React, { Component } from 'react';
let AreaChart = require('zingchart-react').area;
let myAreaValues = [
    { text : "First Series", values : [0,1,2,2,4,6,7] },
    { text : "Second Series", values : [18,12,7,14,1,19,4] },
    { text : "Third Series", values : [0,1,12,12,4,6,17] },
    { text : "Fourth Series", values : [18,22,17,4,1,9,4] },
];

class Graph extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            graphValues : myAreaValues
        }        
    }

    componentWillMount() { 
        
    } 

    updateValues() {
        
        let myAreaValues2 = [
            { text : "First Series", values : [5,1,2,2,4,6,7] },
            { text : "Second Series", values : [18,112,7,14,1,19,4] },
            { text : "Third Series", values : [0,1,13,12,4,6,17] },
            { text : "Fourth Series", values : [11,22,17,4,1,9,4] },
        ];

        this.setState({graphValues: myAreaValues2});
        
        console.log(this.state);
    }

    componentWillUnmount() {
        clearInterval(this.state.inter)
    }

    render() {
        return (
            <div>            
                <AreaChart id="chart3" height="300" width="600" series={this.state.graphValues} legend="true" theme="slate" title="Hello Area Chart"/>,
                <button type="button" onClick={() => {this.updateValues()}}>click</button>
            </div>
        );
    }
}

export default  Graph;