import {Chatbot} from 'supersimpledev'
 import { useState } from 'react'
  
 export function ChatbotInput({ messages, setMessages }) {
      const [inputMsg, setMsg] = useState("");

      function sendMessage() {

        const newChatmsg = [
          ...messages, {
            message: inputMsg,
            sender: "user",
            key: crypto.randomUUID()
          }
        ]

        setMessages(newChatmsg);

        const Response = Chatbot.getResponse(inputMsg);

        setMessages([
          ...newChatmsg, {
            message: Response,
            sender: "robot",
            key: crypto.randomUUID()
          }
        ]);

        setMsg("");
      }

      return (
        <div className="container-1">
          <input
            className="chat-input"
            type="text" placeholder="Send a Message To Chatbot"
            value={inputMsg}
            onChange={(event) => setMsg(event.target.value)}
          />
          <button
            className="button"
            onClick={sendMessage}
          >Send</button>
        </div>
      )
    };