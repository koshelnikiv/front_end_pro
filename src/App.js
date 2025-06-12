import React, { useState, useEffect } from "react";
import "./App.css";
import smile1 from "./images/smile1.png";
import smile2 from "./images/smile2.png";
import smile3 from "./images/smile3.png";
import smile4 from "./images/smile4.png";
import smile5 from "./images/smile5.png";

const EmojiVoting = () => {
  const initialEmojis = [
    { id: "smile1", img: smile1 },
    { id: "smile2", img: smile2 },
    { id: "smile3", img: smile3 },
    { id: "smile4", img: smile4 },
    { id: "smile5", img: smile5 },
  ];

  const [votes, setVotes] = useState({});
  const [winner, setWinner] = useState(null);

  // Завантаження з localStorage при старті
  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {};
    setVotes(storedVotes);
  }, []);

  // Збереження у localStorage при зміні голосів
  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (id) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [id]: (prevVotes[id] || 0) + 1,
    }));
  };

  const showResults = () => {
    const entries = Object.entries(votes);
    if (entries.length === 0) {
      setWinner(null);
      return;
    }

    const [id, count] = entries.reduce((max, current) =>
      current[1] > max[1] ? current : max
    );

    const emoji = initialEmojis.find((e) => e.id === id);
    setWinner({ emoji, count });
  };

  const clearResults = () => {
    localStorage.removeItem("emojiVotes");
    setVotes({});
    setWinner(null);
  };

  return (
    <div className="container">
      <h2>Голосування за найкращий смайлик</h2>

      <div className="emoji-list">
        {initialEmojis.map(({ id, img }) => (
          <div className="emoji-wrapper" key={id}>
            <button onClick={() => handleVote(id)} className="emoji-button">
              <img src={img} alt={id} className="emoji-img" />
            </button>
            <div className="emoji-votes">{votes[id] || 0} голосів</div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={showResults} className="show-button">
          Show Results
        </button>
      </div>
      <div>
        {winner && (
          <div className="winner">
            <p>Результати голосування</p>
            <p>Переможець:</p>
            <img
              src={winner.emoji.img}
              alt="winner"
              className="winner-img"
            />{" "}
            <p>Кількість голосів: {winner.count}</p>
          </div>
        )}
      </div>
      <div>
        <button onClick={clearResults} className="clear-button">
          Очистити результати
        </button>
      </div>
    </div>
  );
};

export default EmojiVoting;
