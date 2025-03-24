import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const handleMessageInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleAddMessage = (event) => {
    event.preventDefault();
    const newMessage = [...messages, messageInput];
    setMessages(newMessage);
    setMessageInput("")
  };

  function handleDeleteMessage (messageIndex) {
    const newMessage = messages.filter((_, index) => index !== messageIndex);
    setMessages(newMessage);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleAddMessage}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleMessageInputChange}
            value={messageInput}
          />
        </label>
        <button className="submit-message-button">
          Submit
        </button>
      </form>
      <div class="board">
      {messages.map((item, index) => {
            return (
              <div className="message" key={index}>
                 <h1>{item}{""}</h1>
                  <button className="delete-button" 
                    onClick={() => handleDeleteMessage(index)}
                  >
                    x
                  </button>
              </div>
            )
          })}
        
      </div>
    </div>
  );
}

export default MessageBoard;
