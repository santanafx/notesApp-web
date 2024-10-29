import { LoginPageTemplateProps } from "./LoginPageTemplate.interface";
import styles from "./LoginPageTemplate.module.css";

export const LoginPageTemplate = ({
  mainText,
  emailInput,
  passwordInput,
  signInButton,
  signUpButton,
}: LoginPageTemplateProps) => {
  return (
    <div className={styles.templateContainer}>
      <div className={styles.inputsContainer}>
        {mainText}
        {emailInput}
        {passwordInput}
        <div className={styles.buttonsContainer}>
          {signInButton}
          {signUpButton}
        </div>
      </div>
    </div>
  );
};
