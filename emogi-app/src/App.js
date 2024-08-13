import { Component } from "react";
import "./App.css";
import EmogiList from "./components/EmogiList/EmogiList";
import ResultText from "./components/ResultText/ResultText";

class App extends Component {
  constructor() {
    super();
    const best = JSON.parse(window.localStorage.getItem("bestEmogi"));
    this.state = {
      emogies: best || [
        {
          id: "id-1",
          smile: "😂",
          voice: 0,
        },
        {
          id: "id-2",
          smile: "🥰",
          voice: 0,
        },
        {
          id: "id-3",
          smile: "😡",
          voice: 0,
        },
        {
          id: "id-4",
          smile: "😇",
          voice: 0,
        },
        {
          id: "id-5",
          smile: "😏",
          voice: 0,
        },
      ],
      isShow: false,
    };

    this.handleShowResult = this.handleShowResult.bind(this);
    this.handleResetEmogi = this.handleResetEmogi.bind(this);
    this.handleClickVoice = this.handleClickVoice.bind(this);
  }

  handleClickVoice = (id) => {
    localStorage.setItem("bestEmogi", JSON.stringify(this.state.emogies));
    const emogisId = this.state.emogies.filter((emogi) => emogi.id === id);
    const newVoice = emogisId.map((element) => (element.voice += 1));
    this.setState({ voice: newVoice });
  };

  handleShowResult = () => {
    this.setState((state) => ({ isShow: !state.isShow }));
    localStorage.getItem("bestEmogi") || JSON.stringify(this.state.emogies);
  };

  handleResetEmogi = () => {
    localStorage.removeItem("bestEmogi");
    this.setState((state) => ({ isShow: !state.isShow }));
  };

  render() {
    const { emogies } = this.state;
    const showResult = this.state.isShow;
    return (
      <div className="App">
        <header className="App-header">Choose the best emoticon🙃</header>
        <EmogiList list={emogies} handleClickVoice={this.handleClickVoice} />
        <button
          className="btn_result"
          type="button"
          onClick={this.handleShowResult}
        >
          Show Result
        </button>
        {showResult && (
          <div className="result_container">
            <ResultText list={emogies} />
            <button
              className="btn_reset"
              type="button"
              onClick={this.handleResetEmogi}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
