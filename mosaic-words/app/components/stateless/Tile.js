import React from 'react'
import {Motion, spring} from 'react-motion'
import {connect} from 'react-redux'

const defaultText = 'Type...'

const defaultOffset = 0;

let Tile = (props) => {

  let {row, col, size, rgb, rotate, text} = props;

  let squareText = text || defaultText;

  let topOffset = row * size;
  let leftOffset = col * size;

  let motionStyle = {
    topOffset: spring(topOffset),
    leftOffset: spring(leftOffset),
    // red: 173,
    // gold: 216,
    red: rgb.r,
    gold: rgb.g,
    blue: rgb.b
  }


  let defaultMotionStyle = {
    topOffset: defaultOffset,
    leftOffset: defaultOffset,
    red: 255,
    gold: 255,
    blue: 255
  }

  return (
    <Motion defaultStyle={defaultMotionStyle} style={motionStyle}>
      {({topOffset, leftOffset, red, gold, blue}) => {
          let style =
            {
              top: topOffset,
              left: leftOffset,
              width: squareText === defaultText ? size : blue,
              height: squareText === defaultText ? size : red,
              backgroundColor: `rgba(${red}, ${gold}, ${blue}, .6)`

            };

            if (text) {
              style.transform = `rotateZ(${blue}deg)`;
            }

          let charNode = null;
          //console.log((row+1)*col)
          let letter = squareText[row * col];
          if (letter) {
            charNode = <span className='letter'>{letter}</span>;
          }

          return (
            <div className="tile" style={style}>{rgb.r}, {rgb.g}, {rgb.b} {charNode}</div>
          )
        }
      }

    </Motion>
    );

}

const mapStateToProps = (state, ownProps) => {
  let rgb = intToRGB(`${ownProps.row}-${state.text}-${ownProps.col}${ownProps.row}`);
  return {rgb, text: state.text}
}

Tile = connect(mapStateToProps)(Tile)

export default Tile

const hashCode = (str) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

const intToRGB = (i) => {
  var c = (hashCode(i) & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return hexToRGB("00000".substring(0, 6 - c.length) + c);
}

const hexToRGB = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
