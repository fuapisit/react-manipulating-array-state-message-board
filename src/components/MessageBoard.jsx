import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();  
      setMessages([...messages, messageText]);
      setMessageText("");
  };

  const handleDeleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <form className="app-wrapper" onSubmit={handleFormSubmit}>
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={handleInputChange}
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map((message, index) => (
          <div key={index} className="message" style={{  }}>
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => handleDeleteMessage(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}

export default MessageBoard;
