import Remove from "../Remove/Remove";
import { NotesProps } from "./Note.interface";
import styles from "./Note.module.css";

export default function Note({ content, onChange, onClick }: NotesProps) {
  return (
    <div className={styles.noteContainer}>
      <div className={styles.tab}>
        <div className={styles.remove}>
          <Remove onClick={onClick} />
        </div>
      </div>
      <div className={styles.content}>
        <textarea
          cols={50}
          rows={20}
          className={styles.textarea}
          placeholder="Type your text here..."
          onChange={onChange}
        >
          {content}
        </textarea>
      </div>
    </div>
  );
}
