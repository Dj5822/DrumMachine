import React from 'react';
import '../Style/Style.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.buttonClicked = this.buttonClicked.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  buttonClicked(event) {
    this.setState({text: event.target.id});
    event.target.childNodes[1].play();
  }

  handleKeyPress = (event) => {
    var audioElement = document.getElementById(event.key.toUpperCase());
    if (audioElement){
      this.setState({text: audioElement.parentElement.id});
      audioElement.play();
    }
  }

  render() {
    return (
      <div id="drum-machine" onKeyDown={this.handleKeyPress} tabIndex="0">
        <div id="display">{this.state.text}</div>
        <div id="drum-pad-container">
          <button className="drum-pad" id="c-key" onClick={this.buttonClicked}>Q
            <audio id="Q" className="clip">
              <source type="audio/mp3" src="../../Audio/c.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="d-key" onClick={this.buttonClicked}>W
            <audio id="W" className="clip">
              <source type="audio/mp3" src="../../Audio/d.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="e-key" onClick={this.buttonClicked}>E
            <audio id="E" className="clip">
              <source type="audio/mp3" src="../../Audio/e.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="f-key" onClick={this.buttonClicked}>A
            <audio id="A" className="clip">
              <source type="audio/mp3" src="../../Audio/f.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="g-key" onClick={this.buttonClicked}>S
            <audio id="S" className="clip">
              <source type="audio/mp3" src="../../Audio/g.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="a-key" onClick={this.buttonClicked}>D
            <audio id="D" className="clip">
              <source type="audio/mp3" src="../../Audio/a.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="b-key" onClick={this.buttonClicked}>Z
            <audio id="Z" className="clip">
              <source type="audio/mp3" src="../../Audio/b.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="c-sharp-key" onClick={this.buttonClicked}>X
            <audio id="X" className="clip">
              <source type="audio/mp3" src="../../Audio/cSharp.mp3" />
            </audio>
          </button>
          <button className="drum-pad" id="d-sharp-key" onClick={this.buttonClicked}>C
            <audio id="C" className="clip">
              <source type="audio/mp3" src="../../Audio/dSharp.mp3" />
            </audio>
          </button>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
