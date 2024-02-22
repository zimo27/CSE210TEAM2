import ChatMessage from '../components/ChatMessage';
import WelcomeMessage from '../components/WelcomeMessage';
import styles from '../styles/Home.module.css';

export default function InstructionMessage() {
	return (
        <div className={styles.chatContainer1}>
          <WelcomeMessage />
          <ChatMessage
            role="user"
            text="How can I make an appointent with CAPS?"
          />
          <ChatMessage
            role="bot"
            text="To schedule your first appointment with CAPS, you can call CAPS at
            (858) 534-3755, schedule an appointment through MyStudentChart,
            or visit the Central Office at Galbraith Hall 190."
          />
        </div>
	);
}
