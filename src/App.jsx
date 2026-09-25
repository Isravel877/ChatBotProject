import { useState } from 'react'

import { ChatbotInput } from './Companents/ChatbotInput';
import { ChatbotMessage } from './Companents/ChatBotMessage';

import './App.css'

 


   export function App() {

      const [messages, setMessages] = useState([]);

      return (
        <div className="container-box">


          <div className="chat-header">
            <div>
              <h2>Chatbot</h2>
              <p>Online • Ready to help</p>
            </div>
          </div>

          <div className="chat-messages">

            {messages.map((message) => (
              <ChatbotMessage
                message={message.message}
                sender={message.sender}
                key={message.key}
              />
            ))}

          </div>


          <ChatbotInput
            messages={messages}
            setMessages={setMessages}
          />

        </div>

      
      );
    }

      export default App;
    