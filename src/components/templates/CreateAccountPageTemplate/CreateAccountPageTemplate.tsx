import { CreateAccountPageTemplateProps } from "./CreateAccountPageTemplate.interface";
import styles from "./CreateAccountPageTemplate.module.css";

export const CreateAccountPageTemplate = ({
  mainText,
  emailInput,
  passwordInput,
  createAccountButton,
}: CreateAccountPageTemplateProps) => {
  return (
    <div className={styles.templateContainer}>
      <div className={styles.inputsContainer}>
        {mainText}
        {emailInput}
        {passwordInput}
        {passwordInput}
        <div className={styles.buttonsContainer}>{createAccountButton}</div>
      </div>
    </div>
  );
};
