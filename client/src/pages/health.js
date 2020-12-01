import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HealthBanner from '../components/healthBanner';
import Youtube from '../components/youtube';
import Food from '../components/food';
// import SplitPane from 'react-split-pane';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const styles = {
//     background: '#000',
//     width: '2px',
//     cursor: 'col-resize',
//     margin: '0 5px',
//     height: '100%',
// };

function HealthPage() {
    return (
        <div>
            <Navbar />
            <HealthBanner />
            <Youtube />
            <Food />
            {/* <Router>
                <SplitPane
                    split="vertical"
                    minSize={100}
                    defaultSize={100}
                    resizerStyle={styles}
                >
                    <menu>
                        <div><Link to="/">Youtube</Link></div>
                        <div><Link to="/food">Food</Link></div>
                    </menu>
                    <div>
                        <Route exact path="/youtube" component={Youtube} />
                        <Route path="/food" component={Food} />
                    </div>
                </SplitPane>
            </Router> */}
        </div>
    );
};

export default HealthPage;