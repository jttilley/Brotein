import SplitPane from "react-split-pane";
import '../css/main.css'
import React, { Component } from 'react';
import Youtube from '../components/youtube';
import Food from '../components/food';


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
                        <Food />
                    </div>
                    <div className='Youtube-pane'>
                        <h1>search Youtube for workouts</h1>
                        <Youtube
                            btmHorizontal
                            bottomHeight={this.state.btmHeight}
                            minSize={200}
                            maxSize={1000}
                        />
                    </div>
                </SplitPane>
            </div>
        );
    }
}
export default Pane;
