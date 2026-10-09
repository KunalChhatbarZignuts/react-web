import { useCounterStore } from "./useCounterStore";
import { Box, Typography } from "@mui/material";

export const OtherComponent = () => {
  const count = useCounterStore((state) => state.count);

  const count1 = useCounterStore((state) => state.count1);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        borderRadius: 4,
        backgroundColor: "#fff",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
        padding: 2,
        width: "30%",
        flexDirection: "row",
        margin: 10,
      }}
    >
      <Typography variant="h4" color="initial">
        {count}
      </Typography>
      <Typography variant="h4" color="initial">
        {count1}
      </Typography>
    </Box>
  );
};
