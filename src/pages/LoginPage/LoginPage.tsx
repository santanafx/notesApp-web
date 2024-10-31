import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPageTemplate } from "../../components/templates/LoginPageTemplate/LoginPageTemplate";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <LoginPageTemplate
      mainText={
        <Typography variant="h2" color="text.primary">
          Login
        </Typography>
      }
      emailInput={
        <TextField
          required
          id="outlined-required"
          label="Email"
          sx={{ width: 258 }}
        />
      }
      passwordInput={
        <TextField
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          label="Password"
          size="medium"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      }
      signInButton={
        <Button variant="contained" size="large" onClick={() => navigate("/")}>
          Sign in
        </Button>
      }
      signUpButton={
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/createAccount")}
        >
          Sign up
        </Button>
      }
    />
  );
};
