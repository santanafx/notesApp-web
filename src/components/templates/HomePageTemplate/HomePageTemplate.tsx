import { HomePageTemplateProps } from "./HomePageTemplate.interface";
import styles from "./HomePageTemplate.module.css";

export const HomePageTemplate = ({
  addButton,
  saveButton,
  content,
}: HomePageTemplateProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <div className={styles.menu}>{addButton}</div>
        <div className={styles.menu}>{saveButton}</div>
      </div>
      <div className={styles.notesContainer}>{content}</div>
    </div>
  );
};
