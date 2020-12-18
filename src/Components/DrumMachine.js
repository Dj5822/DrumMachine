import React from 'react';
import '../Style/Style.css';

class DrumMachine extends React.Component {
  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
        <div id="drum-pad-container">
          <button className="drum-pad" id="c-key">Q</button>
          <button className="drum-pad" id="d-key">W</button>
          <button className="drum-pad" id="e-key">E</button>
          <button className="drum-pad" id="f-key">A</button>
          <button className="drum-pad" id="g-key">S</button>
          <button className="drum-pad" id="a-key">D</button>
          <button className="drum-pad" id="b-key">Z</button>
          <button className="drum-pad" id="high-c-key">X</button>
          <button className="drum-pad" id="high-d-key">C</button>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
