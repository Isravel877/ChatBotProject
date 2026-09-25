import  user from '../assets/user.jpg';
import robot from '../assets/robot.jpg'; 

   export function ChatbotMessage({ message, sender }) {
      return (
        <div
          className={`chat-message ${sender === "robot" ? "robot-message" : "user-message"
            }`}
        >

          {sender === "robot" && (
            <img
              src={robot}
              alt="Robot"
            />
          )}

          <div className="message-bubble">
            <p>{message}</p>
          </div>

          {sender === "user" && (
            <img
              src={user}
              alt="User"
            />
          )}

        </div>
      );
    }