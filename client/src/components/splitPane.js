// import SplitPane from "react-split-pane";
// import '../css/main.css'
// import React, { Component } from 'react';
// import Youtube from '../components/youtube';
// import Food from '../components/food';
// // import styled from "styled-components";



// // const splitpane = styled.div`
// //     .Resizer {
// //     -moz - box - sizing: border - box;
// // -webkit - box - sizing: border - box;
// // box - sizing: border - box;
// // background: #000;
// // opacity: 0.2;
// // z - index: 1;
// // -moz - background - clip: padding;
// // -webkit - background - clip: padding;
// // background - clip: padding - box;
// //   }

// //   .Resizer: hover {
// //     -webkit - transition: all 2s ease;
// //     transition: all 2s ease;
// // }

// //   .Resizer.horizontal {
// //     height: 11px;
// //     margin: -5px 0;
// //     border - top: 5px solid rgba(255, 255, 255, 0);
// //     border - bottom: 5px solid rgba(255, 255, 255, 0);
// //     cursor: row - resize;
// //     width: 100 %;
// // }

// //   .Resizer.horizontal: hover {
// //     border - top: 5px solid rgba(0, 0, 0, 0.5);
// //     border - bottom: 5px solid rgba(0, 0, 0, 0.5);
// // }

// //   .Resizer.vertical {
// //     width: 11px;
// //     margin: 0 - 5px;
// //     border - left: 5px solid rgba(255, 255, 255, 0);
// //     border - right: 5px solid rgba(255, 255, 255, 0);
// //     cursor: col - resize;
// // }

// //   .Resizer.vertical: hover {
// //     border - left: 5px solid rgba(0, 0, 0, 0.5);
// //     border - right: 5px solid rgba(0, 0, 0, 0.5);
// // }
// //   .Pane1 {
// //     background - color: blue;
// // }
// //   .Pane2 {
// //     background - color: red;
// // }
// // `


// class Pane extends Component {
//     constructor() {
//         super();
//         this.toggleBtmHeight = this.toggleBtmHeight.bind(this);
//     }
//     componentWillMount() {
//         this.setState({
//             btmHeight: ""
//         });
//     }
//     toggleBtmHeight(topPaneHeight) {
//         const maxHeight = 1000;
//         const padding = 225;
//         const btmPaneHeight = maxHeight - topPaneHeight - padding;
//         this.setState({ btmHeight: btmPaneHeight + "px" });
//     }
//     render() {
//         return (
//             <div class id="splitpane">
//                 <SplitPane
//                     split="vertical" minSize={200}
//                     defaultSize="50%"
//                     onChange={size => this.toggleBtmHeight(size)}
//                 >
//                     <div className='Food-pane'>
//                         <Food />
//                     </div>
//                     <div className='Youtube-pane'>
//                         <h1>search Youtube for workouts</h1>
//                         <Youtube
//                             btmHorizontal
//                             bottomHeight={this.state.btmHeight}
//                             minSize={200}
//                         />
//                     </div>
//                 </SplitPane>
//             </div>
//         );
//     }
// }
// export default Pane;
