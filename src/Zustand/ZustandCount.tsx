import { Box, Stack, Typography, IconButton } from "@mui/material";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
  RestoreOutlined,
} from "@mui/icons-material";
import { useCounterStore } from "./useCounterStore";
import { OtherComponent } from "./OtherComponent";

export const ZustandCount = () => {
  const count = useCounterStore((state) => state.count);

  const count1 = useCounterStore((state) => state.count1);

  const incriment = useCounterStore((state) => state.incriment);

  const decriment = useCounterStore((state) => state.decriment);

  const reset = useCounterStore((state) => state.reset);

  return (
    <Box
      sx={{
        p: 5,
        minHeight: "100hv",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "30%",
          borderRadius: 4,
          backgroundColor: "#fff",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: 300,
          }}
        >
          Zustand Counter
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
            aria-label="decriment"
            onClick={() => {
              decriment();
            }}
            sx={{
              width: 40,
              height: 40,
              color: "error.main",
              border: "1px solid",
              borderColor: "    ",
              ":hover": {
                backgroundColor: "error.light",
                color: "white",
                transform: "scale(1.3)",
              },
            }}
          >
            <RemoveCircleOutlineOutlined />
          </IconButton>

          <Typography variant="h4" color="initial">
            {count}
          </Typography>
          <Typography variant="h4" color="initial">
            {count1}
          </Typography>

          <IconButton
            aria-label="decriment"
            onClick={() => {
              incriment();
            }}
            sx={{
              width: 40,
              height: 40,
              color: "success.main",
              border: "1px solid",
              borderColor: "success.light",
              ":hover": {
                backgroundColor: "success.light",
                color: "white",
                transform: "scale(1.3)",
              },
            }}
          >
            <AddCircleOutlineOutlined />
          </IconButton>
        </Stack>
        <IconButton
          aria-label="decriment"
          onClick={() => {
            reset();
          }}
          sx={{
            width: 40,
            height: 40,
            border: "1px solid",
            marginTop: 2,
            ":hover": {
              transform: "scale(1.3)",
            },
          }}
        >
          <RestoreOutlined />
        </IconButton>
      </Box>
      <OtherComponent />
    </Box>
  );
};
