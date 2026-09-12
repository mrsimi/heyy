type ChatMessageProps = {
  text: string;
  index: number;
};

export function ChatMessage({ text, index }: ChatMessageProps) {
  return (
    <div className={`chat-message chat-message-${index}`}>
      <span>{text}</span>
      <i aria-hidden="true" />
    </div>
  );
}
