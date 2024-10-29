import { Button, TextField, Typography } from "@mui/material";
import { LoginPageTemplate } from "../../components/templates/LoginPageTemplate/LoginPageTemplate";

export const LoginPage = () => {
  return (
    <LoginPageTemplate
      mainText={
        <Typography variant="h2" color="text.primary">
          Login
        </Typography>
      }
      emailInput={<TextField required id="outlined-required" label="Email" />}
      passwordInput={
        <TextField required id="outlined-required" label="Password" />
      }
      signInButton={
        <Button variant="contained" size="large">
          Sign in
        </Button>
      }
      signUpButton={
        <Button variant="contained" size="large">
          Sign up
        </Button>
      }
    />
  );
};
