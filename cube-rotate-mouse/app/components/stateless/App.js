import React from 'react'
import {Grid} from 'bootstrap'

const defaultMouseX = 0;
const defaultMouseY = 0;

const App = React.createClass({

  getInitialState() {
    return {
      mouseX: defaultMouseX,
      mouseY: defaultMouseY
    }
  },

  render() {

    let {mouseX, mouseY} = this.state;

    let zSideTransform = 1;

    if (mouseY > 100) {
      zSideTransform = mouseY / 100;
    }

    return (
      <Grid fluid className="cubeWrapper" onMouseMove={this._handleMouseMove}>
        <Cube sideZ={zSideTransform} cubeYRotate={mouseX} cubeXRotate={mouseY}/>
      </Grid>
    );
  },

  _handleMouseMove(event) {

    this.setState({
      mouseX: event.pageX,
      mouseY: event.pageY
    });

  }
})


const Cube = (props) => {

  let {sideZ, cubeYRotate, cubeXRotate} = props

  let frontStyle = {transform: `translateZ(${sideZ}em)`}
  let backStyle = {transform: `rotateX(90deg) translateZ(${sideZ}em)`}
  let rightStyle = {transform: `rotateY(90deg) translateZ(${sideZ}em)`}
  let leftStyle = {transform: `rotateY(-90deg) translateZ(${sideZ}em)`}
  let topStyle = {transform: `rotateX(-90deg) translateZ(${sideZ}em)`}
  let bottomStyle = {transform: `rotateY(-180deg) translateZ(${sideZ}em)`}

  frontStyle['-webkit-transform'] = frontStyle.transform;
  backStyle['-webkit-transform'] = backStyle.transform;
  rightStyle['-webkit-transform'] = rightStyle.transform;
  leftStyle['-webkit-transform'] = leftStyle.transform;
  topStyle['-webkit-transform'] = topStyle.transform;
  bottomStyle['-webkit-transform'] = bottomStyle.transform;

  let cubeStyle = {
    transform: `rotateX(${cubeXRotate}deg) rotateY(${cubeYRotate}deg)`
  }
  cubeStyle['-webkit-transform'] = cubeStyle.transform;

  return (
    <div className="cube" style={cubeStyle}>
      <div className="side" style={frontStyle}><span className="fa fa-hand-lizard-o"/></div>
      <div className="side" style={backStyle}><span className="fa fa-hand-rock-o"/></div>
      <div className="side" style={rightStyle}><span className="fa fa-hand-pointer-o"/></div>
      <div className="side" style={leftStyle}><span className="fa fa-hand-stop-o"/></div>
      <div className="side" style={topStyle}><span className="fa fa-hand-peace-o"/></div>
      <div className="side" style={bottomStyle}><span className="fa fa-hand-spock-o"/></div>
    </div>
  );

}

export default App
