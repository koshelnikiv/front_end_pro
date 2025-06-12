import React from "react";
import "./App.css";
import smile1 from "./images/smile1.png";
import smile2 from "./images/smile2.png";
import smile3 from "./images/smile3.png";
import smile4 from "./images/smile4.png";
import smile5 from "./images/smile5.png";

class EmojiVoting extends React.Component {
  constructor(props) {
    super(props);
    const storedVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {};
    this.state = {
      emojis: [
        { id: "smile1", img: smile1 },
        { id: "smile2", img: smile2 },
        { id: "smile3", img: smile3 },
        { id: "smile4", img: smile4 },
        { id: "smile5", img: smile5 },
      ],
      votes: storedVotes,
      winner: null,
    };
  }

  handleVote = (id) => {
    const newVotes = {
      ...this.state.votes,
      [id]: (this.state.votes[id] || 0) + 1,
    };

    this.setState({ votes: newVotes }, () => {
      localStorage.setItem("emojiVotes", JSON.stringify(this.state.votes));
    });
  };

  showResults = () => {
    const entries = Object.entries(this.state.votes);
    if (entries.length === 0) {
      this.setState({ winner: null });
      return;
    }

    const [id, count] = entries.reduce((max, current) =>
      current[1] > max[1] ? current : max
    );

    const emoji = this.state.emojis.find((e) => e.id === id);
    this.setState({ winner: { emoji, count } });
  };

  clearResults = () => {
    localStorage.removeItem("emojiVotes");
    this.setState({ votes: {}, winner: null });
  };

  render() {
    const { emojis, votes, winner } = this.state;

    return (
      <div className="container">
        <h2>Голосування за найкращий смайлик</h2>

        <div className="emoji-list">
          {emojis.map(({ id, img }) => (
            <div className="emoji-wrapper" key={id}>
              <button
                onClick={() => this.handleVote(id)}
                className="emoji-button"
              >
                <img src={img} alt={id} className="emoji-img" />
              </button>
              <div className="emoji-votes">{votes[id] || 0}</div>
            </div>
          ))}
        </div>
        <div>
          <button onClick={this.showResults} className="show-button">
            Show Results
          </button>
        </div>
        {winner && (
          <div className="winner">
            <p>Результати голосування</p>
            <p>Переможець:</p>
            <p><img src={winner.emoji.img} alt="winner" className="winner-img" /></p>
            <p>Кількість голосів: {winner.count}</p>
          </div>
        )}
        <div>
          <button onClick={this.clearResults} className="clear-button">
            Очистити результати
          </button>
        </div>
      </div>
    );
  }
}

export default EmojiVoting;
