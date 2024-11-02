import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { LoginPageTemplate } from "../../components/templates/LoginPageTemplate/LoginPageTemplate";

const loginFormSchema = z.object({
  login: z
    .string()
    .min(1, { message: "Login is required" })
    .refine((val) => val.includes("@"), {
      message: "Login must be a valid email",
    }),
  password: z.string().min(1, { message: "Password is required" }).min(6, {
    message: "Password must have at least 6 characters",
  }),
});

type loginFormSchemaType = z.infer<typeof loginFormSchema>;

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control } = useForm<loginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLoginForm = (data) => {
    console.log(data);
    // navigate("/");
  };

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
        <Controller
          name="login"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              id="outlined-required"
              label="Email"
              error={!!error}
              helperText={error ? error.message : null}
              sx={{ width: 258 }}
            />
          )}
        />
      }
      passwordInput={
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password *"
              size="medium"
              error={!!error}
              helperText={error ? error.message : null}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
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
          )}
        />
      }
      signInButton={
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit(handleLoginForm)}
        >
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
