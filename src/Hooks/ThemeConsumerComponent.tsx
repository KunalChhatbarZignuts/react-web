import { createContext, useContext } from "react";
import { Button, Stack } from "@mui/material";
import type { ThemeContextType } from "./Hooks.type";

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeConsumerComponent() {
  const { theme, setTheme } = useContext(ThemeContext); // 6. useContext
  return (
    <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
      <Button
        variant={theme === "light" ? "contained" : "outlined"}
        size="small"
        onClick={() => setTheme("light")}
      >
        Light Theme
      </Button>
      <Button
        variant={theme === "dark" ? "contained" : "outlined"}
        size="small"
        color="secondary"
        onClick={() => setTheme("dark")}
      >
        Dark Theme
      </Button>
      <Button
        variant={theme === "brand" ? "contained" : "outlined"}
        size="small"
        color="info"
        onClick={() => setTheme("brand")}
      >
        Brand Theme
      </Button>
    </Stack>
  );
}
