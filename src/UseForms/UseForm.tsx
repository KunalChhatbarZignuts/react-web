import { useEffect, useRef } from "react";
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
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

interface InputType {
  username: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

export const UseForm = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

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
  const [dialogOpen, setDialogOpen] = useState(false);
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
            Create Account Using useForm #{renderCount.current ?? ""}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
              },
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

          <Button
            type="button"
            variant="outlined"
            onClick={() => setDialogOpen(true)}
          >
            Open Dialog
          </Button>

          <DialogExample
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
          />
        </Stack>
      </Box>
    </form>
  );
};

interface DialogExampleProps {
  open: boolean;
  onClose: () => void;
}

export const DialogExample = ({ open, onClose }: DialogExampleProps) => {
  const handleConfirm = () => {
    console.log("Action confirmed");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{}}>
      <DialogTitle>Confirm Action</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to continue?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button onClick={handleConfirm} variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
