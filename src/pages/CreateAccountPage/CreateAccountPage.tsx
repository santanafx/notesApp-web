import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CreateAccountPageTemplate } from "../../components/templates/CreateAccountPageTemplate/CreateAccountPageTemplate";

export const CreateAccountPage = () => {
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
    <CreateAccountPageTemplate
      mainText={
        <Typography variant="h2" color="text.primary">
          Create Account
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
      createAccountButton={
        <Button variant="contained" size="large">
          Create Account
        </Button>
      }
    />
  );
};
