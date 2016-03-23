import React from 'react'
import Tile from 'app/components/stateless/Tile'
import {addChar} from 'app/actions'
import {connect} from 'react-redux'

const squareSize = 100

const App = React.createClass({

  getInitialState() {
    return {rows: 0, cols: 0}
  },

  render() {

    return (
      <div className="tile-wrapper" onClick={() => this._txtInput.focus()}>
        <input
          ref={i => this._txtInput = i}
          type='text'
          onKeyDown={this._handleKeyDown} style={{position: 'absolute', top: -200}} />
        {this._getTileNodes()}
      </div>
    );
  },

  _handleKeyDown(e) {

    this.props.addChar(String.fromCharCode(e.keyCode))

  },

  _getTileNodes() {

    let tileNodes = [];

    for (let r = 0; r < this.state.rows; r++) {
      for (let c = 0; c < this.state.cols; c++) {
        tileNodes.push(<Tile key={`tile=${r}-${c}`} size={squareSize} row={r} col={c} />)
      }
    }

    return tileNodes;

  },

  componentDidMount() {

    this._txtInput.focus();

    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    let rows = Math.ceil(h / squareSize)
    let cols = Math.ceil(w / squareSize)

    this.setState({rows, cols})

  }

})


export default connect(null, {addChar})(App)
