import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

var isOn = false;

class Dictaphone extends Component {
  render() {
    const {
      transcript,
      startListening,
      stopListening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    function handleChange() {
      if (isOn) {
        stopListening();
      } else if (!isOn) {
        resetTranscript();
        startListening();
      }

      isOn = !isOn;
    }

    return (
      <div>
        <input
          className="form-control micro-input"
          placeholder="What's your transaction..."
          defaultValue={transcript}
        />
        <button className="btn btn-success" onClick={handleChange}>
          <i className="fa fa-microphone" />
        </button>
      </div>
    );
  }
}

Dictaphone.propTypes = propTypes;

const options = {
  autoStart: false
};

export default SpeechRecognition(options)(Dictaphone);
