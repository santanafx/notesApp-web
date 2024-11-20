import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { CreateAccountPageTemplate } from "../../components/templates/CreateAccountPageTemplate/CreateAccountPageTemplate";
import { createNewUser } from "../../service/createNewUser";

const createAccountFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .refine((val) => val.includes("@"), {
        message: "Email must be a valid email",
      }),
    password: z.string().min(1, { message: "Password is required" }).min(6, {
      message: "Password must have at least 6 characters",
    }),
    confirmPassword: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, { message: "Password must have at least 6 characters" }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

type createAccountFormSchemaType = z.infer<typeof createAccountFormSchema>;

export const CreateAccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control } = useForm<createAccountFormSchemaType>({
    resolver: zodResolver(createAccountFormSchema),
  });
  const createAccountMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      createNewUser(email, password),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCreateAccountForm = (data) => {
    createAccountMutation.mutate(data);
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
    <CreateAccountPageTemplate
      mainText={
        <Typography variant="h2" color="text.primary">
          Create Account
        </Typography>
      }
      emailInput={
        <Controller
          name="email"
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
      confirmPasswordInput={
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Confirm Password *"
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
      createAccountButton={
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit(handleCreateAccountForm)}
        >
          Create Account
        </Button>
      }
    />
  );
};
