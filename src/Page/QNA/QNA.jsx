import React, { useState } from "react";
import sendEmail from "../../component/Email/email.jsx";
import "./QNA.css";

function GiftChoice() {
  const [message, setMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedGift, setSelectedGift] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleYes = () => {
    const nextMessage = "Yay! You chose me!";
    setMessage(nextMessage);
    setShowOptions(true);
  };

  const handleGiftSelect = async (gift) => {
    const nextMessage = `Tumne ${gift} choose kiya`;
    setSelectedGift(nextMessage);
    setEmailStatus("Sending email...");

    try {
      await sendEmail(gift);
      setEmailStatus("Email sent successfully.");
    } catch (error) {
      console.error("EmailJS error:", error);
      if (error?.text?.toLowerCase().includes("recipients address is empty")) {
        setEmailStatus("EmailJS template mein To Email ko {{to_email}} par set karein.");
      } else {
        setEmailStatus("Gift selected, but the email could not be sent.");
      }
    }
  };

  const moveNoBtn = () => {
    const audio = new Audio("/no.mp3");
    audio.play();

    // Random position generate karo
    const x = Math.floor(Math.random() * 250);
    const y = Math.floor(Math.random() * 250);
    setPos({ x, y });
  };

  return (
    <div className="gift-container">
      <h2>Birthday Gift Q&A 🎂</h2>
      <p>Gift chahiye hai to choose karo:</p>
      <div className="button-group">
        <button className="yes-btn" onClick={handleYes}>
          Yes, I like you 💕
        </button>
        <button
          className="no-btn"
          onMouseEnter={moveNoBtn}   // PC hover
          onTouchStart={moveNoBtn}  // Phone touch
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        >
          No
        </button>
      </div>

      <p className="message">{message}</p>

      {showOptions && (
        <div className="gift-options">
          <p>Now tell me… what gift would make you happiest? 🎁</p>
          <button onClick={() => handleGiftSelect("Flowers 🌸")}>Flowers 🌸</button>
          <button onClick={() => handleGiftSelect("Chocolates 🍫")}>Chocolates 🍫</button>
          <button onClick={() => handleGiftSelect("Books 📚")}>Books 📚</button>
          <button onClick={() => handleGiftSelect("Surprise 🎉")}>Surprise 🎉</button>
        </div>
      )}

      {selectedGift && <p className="message">{selectedGift}</p>}
      {emailStatus && <p className="message" role="status">{emailStatus}</p>}
    </div>
  );
}

export default GiftChoice;
