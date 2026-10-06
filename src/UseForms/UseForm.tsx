import { useRef } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { useForm } from "react-hook-form";

interface InputType {
  username: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

export const UseForm = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  console.log("Form render:", renderCount.current);

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { register, handleSubmit } = useForm<InputType>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      name: "",
    },
  });

  const onFormSubmit = (data: InputType) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    if (!passwordRef.current) return;

    const input = passwordRef.current;

    input.type = input.type === "password" ? "text" : "password";
  };

  const passwordRegister = register("password");

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Box sx={{ padding: 10 }}>
        <Stack
          spacing={2}
          sx={{
            maxWidth: "50%",
            padding: 4,
            borderRadius: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 300,
            }}
          >
            Create Account #{renderCount.current}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            <TextField
              label="User Name"
              required
              {...register("username", {
                required: "Enter User Name",
              })}
              // error={!!errors.username}
              // helperText={errors.username?.message}
            />

            <TextField label="Name" {...register("name")} />

            <TextField label="Email" type="email" {...register("email")} />

            <TextField
              label="Password"
              type="password"
              {...passwordRegister}
              inputRef={(element) => {
                passwordRef.current = element;

                passwordRegister.ref(element);
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="button"
                        onClick={togglePasswordVisibility}
                        edge="end"
                        aria-label="Toggle password visibility"
                      >
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              maxWidth: "50%",
              alignSelf: "flex-end",
            }}
          >
            Create Account
          </Button>
        </Stack>
      </Box>
    </form>
  );
};
