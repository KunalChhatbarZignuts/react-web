import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { useCounter } from "./Context";

export const ContextCouter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <Box
      sx={{
        p: 5,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f6fa",
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
          sx={{ textAlign: "center", fontWeight: 600, mb: 3 }}
        >
          Context Counter
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
            onClick={decrement}
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
            onClick={increment}
          >
            <AddCircleOutlineOutlined />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
