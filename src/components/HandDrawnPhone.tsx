import { sceneOneMessages } from "@/data/story";
import { ChatMessage } from "./ChatMessage";

export function HandDrawnPhone() {
  return (
    <div className="phone-wrap" aria-label="A conversation about weekend plans">
      <div className="phone-shadow" />
      <div className="phone">
        <div className="phone-speaker" />
        <div className="chat-header">
          <span className="scribble-avatar">i</span>
          <span>Idara</span>
          <em>now</em>
        </div>
        <div className="chat-thread">
          {sceneOneMessages.map((text, index) => (
            <ChatMessage key={text} text={text} index={index} />
          ))}
          <div className="typing-dots" aria-hidden="true"><b /><b /><b /></div>
        </div>
        <div className="chat-input"><span>say something...</span><i>↑</i></div>
      </div>
    </div>
  );
}
