import SplitPane from "react-split-pane";
import '../css/main.css'
import React, { Component } from 'react';
import HistoryWorkout from './historyWorkout';
import HistoryMeal from './historyMeal';
//import styled from "styled-components";



class Pane extends Component {
    constructor() {
        super();
        this.toggleBtmHeight = this.toggleBtmHeight.bind(this);
    }
    componentWillMount() {
        this.setState({
            btmHeight: ""
        });
    }
    toggleBtmHeight(topPaneHeight) {
        const maxHeight = 1000;
        const padding = 225;
        const btmPaneHeight = maxHeight - topPaneHeight - padding;
        this.setState({ btmHeight: btmPaneHeight + "px" });
    }
    
    render() {
        return (
            <div class id="splitpane">
                
                <SplitPane
                    split="vertical" minSize={200}
                    defaultSize="50%"
                    onChange={size => this.toggleBtmHeight(size)}
                >
                    <div className='Food-pane'>
                        <HistoryWorkout />
                    </div>
                    <div className='Youtube-pane'>
                        <HistoryMeal />
                    </div>
                </SplitPane>
               
            </div>
        );
    }
}
export default Pane;
