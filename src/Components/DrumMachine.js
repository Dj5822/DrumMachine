import React from 'react';
import '../Style/Style.css';

class DrumMachine extends React.Component {
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  buttonClicked(event) {
    event.target.childNodes[1].play();
  }

  handleKeyPress = (event) => {
    var audioElement = document.getElementById(event.key.toUpperCase());
    if (audioElement){
      audioElement.play();
    }
  }

  render() {
    return (
      <div id="drum-machine" onKeyDown={this.handleKeyPress} tabIndex="0">
        <div id="display"></div>
        <div id="drum-pad-container">
          <button className="drum-pad" id="c-key" onClick={this.buttonClicked}>Q
            <audio id="Q">
              <source type="audio/mp3" src="../../Audio/c.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="d-key" onClick={this.buttonClicked}>W
            <audio id="W">
              <source type="audio/mp3" src="../../Audio/d.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="e-key" onClick={this.buttonClicked}>E
            <audio id="E">
              <source type="audio/mp3" src="../../Audio/e.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="f-key" onClick={this.buttonClicked}>A
            <audio id="A">
              <source type="audio/mp3" src="../../Audio/f.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="g-key" onClick={this.buttonClicked}>S
            <audio id="S">
              <source type="audio/mp3" src="../../Audio/g.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="a-key" onClick={this.buttonClicked}>D
            <audio id="D">
              <source type="audio/mp3" src="../../Audio/a.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="b-key" onClick={this.buttonClicked}>Z
            <audio id="Z">
              <source type="audio/mp3" src="../../Audio/b.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="c-sharp-key" onClick={this.buttonClicked}>X
            <audio id="X">
              <source type="audio/mp3" src="../../Audio/cSharp.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="d-sharp-key" onClick={this.buttonClicked}>C
            <audio id="C">
              <source type="audio/mp3" src="../../Audio/dSharp.mp3" />
            </audio>
          </button>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
