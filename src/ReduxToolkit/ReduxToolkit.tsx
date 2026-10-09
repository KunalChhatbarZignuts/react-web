import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { decriment, incriment } from "./stores/counterSlice";
import type { RootState, AppDispatch } from "./stores/counterStore";

export const ReduxToolkit = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box
      sx={{
        p: 5,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f6fa",
        width: "30%",
        borderRadius: 4,
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
        padding: 10,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          p: 4,
          width: 300,
          borderRadius: 4,
          backgroundColor: "#fff",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mb: 3,
          }}
        >
          Redux Toolkit Counter
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{
              width: 45,
              height: 45,
              color: "error.main",
              border: "1px solid",
              borderColor: "error.light",
              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "error.light",
                color: "white",
                transform: "scale(1.08)",
              },
            }}
            onClick={() => dispatch(decriment())}
          >
            <RemoveCircleOutlineOutlined />
          </IconButton>

          <Typography
            variant="h3"
            sx={{
              minWidth: 70,
              textAlign: "center",
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            {count}
          </Typography>

          <IconButton
            sx={{
              width: 45,
              height: 45,
              color: "success.main",
              border: "1px solid",
              borderColor: "success.light",
              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "success.light",
                color: "white",
                transform: "scale(1.08)",
              },
            }}
            onClick={() => dispatch(incriment())}
          >
            <AddCircleOutlineOutlined />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
