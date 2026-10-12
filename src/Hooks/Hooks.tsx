import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useReducer,
  useLayoutEffect,
  useInsertionEffect,
  useDebugValue,
  useSyncExternalStore,
  useActionState,
  useOptimistic,
  useEffectEvent,
} from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  TextField,
  Chip,
  Paper,
  Alert,
} from "@mui/material";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlined from "@mui/icons-material/RemoveCircleOutlined";
import Refresh from "@mui/icons-material/Refresh";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import Speed from "@mui/icons-material/Speed";
import Psychology from "@mui/icons-material/Psychology";
import Tune from "@mui/icons-material/Tune";
import Send from "@mui/icons-material/Send";
import Wifi from "@mui/icons-material/Wifi";
import FlashOn from "@mui/icons-material/FlashOn";
import Code from "@mui/icons-material/Code";
import { ThemeContext } from "@emotion/react";
import type { ThemeMode } from "./Hooks.type";
import { CustomInput, type CustomInputRef } from "./CustomInput";
import { ThemeConsumerComponent } from "./ThemeConsumerComponent";
import { cartReducer } from "./cartReducer";

// Pure helper function for factorial calculation
function computeFactorial(n: number): number {
  if (n <= 0) return 1;
  return n * computeFactorial(n - 1);
}

// Stable event subscriber for window resize
function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

// Stable event subscriber for network status
function subscribeToOnline(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribeToOnline,
    () => navigator.onLine,
    () => true,
  );

  useDebugValue(isOnline ? "Online (Connected)" : "Offline (Disconnected)");
  return isOnline;
}

function useWindowDimensions() {
  const width = useSyncExternalStore(
    subscribeToResize,
    () => window.innerWidth,
    () => 1200,
  );

  const height = useSyncExternalStore(
    subscribeToResize,
    () => window.innerHeight,
    () => 800,
  );

  return { width, height };
}

export const Hooks = () => {
  // --- Theme State ---
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  // --- 9. useInsertionEffect (Dynamic CSS Injection) ---
  useInsertionEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = `.hooks-dynamic-theme { transition: all 0.3s ease; }`;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // --- 1. useState ---
  const [counter, setCounter] = useState(0);

  // --- 2. useEffect ---
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isTimerRunning) {
      interval = setInterval(() => setTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // --- 16. useEffectEvent (React 19) ---
  const onTimerTickLog = useEffectEvent((timeVal: number) => {
    if (timeVal > 0 && timeVal % 5 === 0) {
      console.log(
        `[useEffectEvent Notification] Timer passed ${timeVal} seconds mark!`,
      );
    }
  });

  useEffect(() => {
    onTimerTickLog(timer);
  }, [timer]);

  // --- 3. useRef & useImperativeHandle ---
  const customInputRef = useRef<CustomInputRef>(null);

  // --- 10. useLayoutEffect ---
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxDimensions, setBoxDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      const roundedW = Math.round(width);
      const roundedH = Math.round(height);
      setBoxDimensions((prev) => {
        if (prev.width === roundedW && prev.height === roundedH) return prev;
        return { width: roundedW, height: roundedH };
      });
    }
  }, [counter, timer]);

  // --- 4. useMemo & useCallback ---
  const [calcNum, setCalcNum] = useState(6);

  const calculateFactorial = useCallback((n: number): number => {
    return computeFactorial(n);
  }, []);

  const factorialResult = useMemo(
    () => calculateFactorial(calcNum),
    [calcNum, calculateFactorial],
  );

  // --- 5. useReducer ---
  const [cart, dispatchCart] = useReducer(cartReducer, { items: [], total: 0 });

  // --- 11. Custom Hooks with useDebugValue & useSyncExternalStore ---
  const isOnline = useOnlineStatus();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  // --- 12. useActionState (React 19 Form Action) ---
  const [actionState, formAction, isActionPending] = useActionState(
    async (_prevState: string | null, formData: FormData) => {
      const name = formData.get("username") as string;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!name) return "Error: Please enter a name";
      return `Success: Welcome back, ${name}! Action processed successfully.`;
    },
    null,
  );

  // --- 13. useOptimistic (React 19 Optimistic State) ---
  const [messages, setMessages] = useState<string[]>([
    "Hello from server!",
    "Welcome to React 19 Hooks demo.",
  ]);

  const [optimisticMessages, setOptimisticMessage] = useOptimistic(
    messages,
    (current, newMessage: string) => [...current, `${newMessage} (Sending...)`],
  );

  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = async () => {
    if (!messageInput.trim()) return;
    const msgToSend = messageInput;
    setMessageInput("");

    // Trigger optimistic update immediately
    setOptimisticMessage(msgToSend);

    // Simulate network delay
    await new Promise((res) => setTimeout(res, 1200));

    // Commit actual state update
    setMessages((prev) => [...prev, `${msgToSend} (Delivered)`]);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme: setThemeMode }}>
      <Box
        className="hooks-dynamic-theme"
        sx={{
          py: 5,
          px: { xs: 2, sm: 4, md: 6 },
          minHeight: "100vh",
          backgroundColor:
            themeMode === "dark"
              ? "#0f172a"
              : themeMode === "brand"
                ? "f8fafc"
                : "#f0f9ff",
          color: themeMode === "dark" ? "#f8fafc" : "#0f172a",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          {/* Main Title & Banner */}
          <Box sx={{ mb: 5, textAlign: "center" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center", mb: 1 }}
            >
              <Chip
                icon={<Code />}
                label="React 19 Complete Hooks Matrix"
                color="primary"
                sx={{ fontWeight: 700 }}
              />
              <Chip
                icon={<Wifi />}
                label={isOnline ? "Network: Online" : "Network: Offline"}
                color={isOnline ? "success" : "error"}
                variant="outlined"
              />
            </Stack>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 800, mb: 1 }}
            >
              All 16 React Hooks in Action
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "text.primary", maxWidth: 800, mx: "auto", mb: 1 }}
            >
              Comprehensive interactive showcase demonstrating all 16 built-in
              React hooks.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            {/* 1. useState & 2. useEffect */}
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip label="1. useState" color="primary" size="small" />
                  <Chip label="2. useEffect" color="secondary" size="small" />
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  State & Effects Counter / Timer
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  `useState` manages count state, `useEffect` orchestrates
                  interval timer cleanup.
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    textAlign: "center",
                    bgcolor: "background.default",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "primary.main" }}
                  >
                    State Count: {counter} | Timer: {timer}s
                  </Typography>
                </Paper>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    startIcon={<AddCircleOutlined />}
                    onClick={() => setCounter((c) => c + 1)}
                  >
                    Count +1
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<RemoveCircleOutlined />}
                    onClick={() => setCounter((c) => c - 1)}
                  >
                    Count -1
                  </Button>
                  <Button
                    variant="contained"
                    color={isTimerRunning ? "warning" : "success"}
                    startIcon={isTimerRunning ? <Pause /> : <PlayArrow />}
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                  >
                    {isTimerRunning ? "Pause" : "Start"}
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Refresh />}
                    onClick={() => setTimer(0)}
                  >
                    Reset
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            {/* 3. useRef & 7. useId & 8. useImperativeHandle */}
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip label="3. useRef" color="info" size="small" />
                  <Chip label="7. useId" color="secondary" size="small" />
                  <Chip
                    label="8. useImperativeHandle"
                    color="warning"
                    size="small"
                  />
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Ref Handles & Imperative Control
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  `useId` generates unique input IDs; `useImperativeHandle`
                  exposes methods to parent refs.
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <CustomInput
                    ref={customInputRef}
                    label="Imperative Controlled Field"
                  />
                </Box>

                <Stack direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => customInputRef.current?.focusInput()}
                  >
                    Focus Input
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => customInputRef.current?.clearInput()}
                  >
                    Clear Text
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() =>
                      alert(
                        `Input Value via Ref: "${customInputRef.current?.getValue()}"`,
                      )
                    }
                  >
                    Read Value via Ref
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            {/* 4. useMemo & useCallback & 10. useLayoutEffect */}
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip
                    label="4. useMemo"
                    color="success"
                    size="small"
                    icon={<Psychology fontSize="small" />}
                  />
                  <Chip label="useCallback" color="primary" size="small" />
                  <Chip
                    label="10. useLayoutEffect"
                    color="error"
                    size="small"
                  />
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Memoized Math & Layout Measurements
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  `useMemo` caches calculation; `useLayoutEffect` measures
                  container width synchronously.
                </Typography>

                <Box
                  ref={boxRef}
                  sx={{
                    p: 2,
                    border: "1px dashed #94a3b8",
                    borderRadius: 2,
                    mb: 2,
                    bgcolor: "background.default",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Factorial of {calcNum}:{" "}
                    <span style={{ color: "#2563eb" }}>{factorialResult}</span>
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Measured Box via `useLayoutEffect`: {boxDimensions.width}px
                    × {boxDimensions.height}px
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <TextField
                    type="number"
                    label="Factorial Input (0-12)"
                    size="small"
                    value={calcNum}
                    onChange={(e) =>
                      setCalcNum(
                        Math.max(
                          0,
                          Math.min(12, parseInt(e.target.value) || 0),
                        ),
                      )
                    }
                    slotProps={{ htmlInput: { min: 0, max: 12 } }}
                  />
                  <Button
                    variant="outlined"
                    onClick={() => setCalcNum((n) => (n + 1) % 13)}
                  >
                    Increment Input
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            {/* 5. useReducer */}
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip
                    label="5. useReducer"
                    color="warning"
                    size="small"
                    icon={<Tune fontSize="small" />}
                  />
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Shopping Cart Action Reducer
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  `useReducer` manages structured cart state dispatches (`ADD`,
                  `REMOVE`, `CLEAR`).
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{ p: 2, mb: 2, bgcolor: "background.default" }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    Cart ({cart.items.length} items) - Total: ${cart.total}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexWrap: "wrap", gap: 1 }}
                  >
                    {cart.items.length === 0 ? (
                      <Typography variant="caption" color="text.secondary">
                        Cart is empty. Click buttons below to add items.
                      </Typography>
                    ) : (
                      cart.items.map((item) => (
                        <Chip
                          key={item.id}
                          label={`${item.name} ($${item.price})`}
                          size="small"
                          onDelete={() =>
                            dispatchCart({ type: "REMOVE", payload: item.id })
                          }
                        />
                      ))
                    )}
                  </Stack>
                </Paper>

                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    size="small"
                    color="warning"
                    onClick={() =>
                      dispatchCart({
                        type: "ADD",
                        payload: {
                          id: Date.now(),
                          name: "React Book",
                          price: 29,
                        },
                      })
                    }
                  >
                    + Add Book ($29)
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="warning"
                    onClick={() =>
                      dispatchCart({
                        type: "ADD",
                        payload: {
                          id: Date.now(),
                          name: "Dev Course",
                          price: 49,
                        },
                      })
                    }
                  >
                    + Add Course ($49)
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => dispatchCart({ type: "CLEAR" })}
                  >
                    Clear Cart
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            {/* 6. useContext & 9. useInsertionEffect */}
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip label="6. useContext" color="secondary" size="small" />
                  <Chip
                    label="9. useInsertionEffect"
                    color="info"
                    size="small"
                  />
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Global Theme Context & CSS Injection
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  `useContext` accesses active theme; `useInsertionEffect`
                  injects dynamic style rules.
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    mb: 2,
                    textAlign: "center",
                    bgcolor: "background.default",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Active Theme Mode:{" "}
                    <span
                      style={{ textTransform: "capitalize", color: "#e11d48" }}
                    >
                      {themeMode}
                    </span>
                  </Typography>
                </Paper>

                <ThemeConsumerComponent />
              </CardContent>
            </Card>

            {/* 11. useSyncExternalStore & 10. useDebugValue */}
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip
                    label="11. useSyncExternalStore"
                    color="primary"
                    size="small"
                  />
                  <Chip
                    label="10. useDebugValue"
                    color="success"
                    size="small"
                  />
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  External Store Subscriptions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Subscribes to browser window dimensions & online state
                  seamlessly without tearing.
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    bgcolor: "background.default",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    Window Size: {windowWidth}px × {windowHeight}px
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    `useDebugValue` tags status inside React DevTools.
                  </Typography>
                </Paper>
              </CardContent>
            </Card>

            {/* 12. useActionState (React 19) */}
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip
                    label="12. useActionState (React 19)"
                    color="error"
                    size="small"
                    icon={<FlashOn fontSize="small" />}
                  />
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Async Form Actions & Pending State
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  React 19 action hook handling asynchronous form dispatches and
                  pending UI indicators.
                </Typography>

                <form action={formAction}>
                  <Stack spacing={2}>
                    <TextField
                      name="username"
                      label="Your Name"
                      size="small"
                      placeholder="Enter name..."
                      fullWidth
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="error"
                      disabled={isActionPending}
                      startIcon={<Send />}
                    >
                      {isActionPending
                        ? "Processing Action..."
                        : "Submit Action"}
                    </Button>
                  </Stack>
                </form>

                {actionState && (
                  <Alert
                    severity={
                      actionState.startsWith("Error") ? "error" : "success"
                    }
                    sx={{ mt: 2 }}
                  >
                    {actionState}
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* 13. useOptimistic (React 19) & 16. useEffectEvent */}
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip
                    label="13. useOptimistic (React 19)"
                    color="success"
                    size="small"
                    icon={<Speed fontSize="small" />}
                  />
                  <Chip label="16. useEffectEvent" color="info" size="small" />
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Optimistic UI Updates
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Instantly displays optimistic messages before server
                  confirmation finishes.
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    mb: 2,
                    maxHeight: 130,
                    overflowY: "auto",
                    bgcolor: "background.default",
                  }}
                >
                  <Stack spacing={0.5}>
                    {optimisticMessages.map((msg, index) => (
                      <Typography
                        key={index}
                        variant="caption"
                        sx={{
                          p: 0.5,
                          borderRadius: 1,
                          bgcolor: msg.includes("(Sending...)")
                            ? "#fef3c7"
                            : "#e0f2fe",
                          color: msg.includes("(Sending...)")
                            ? "#92400e"
                            : "#075985",
                          fontWeight: 600,
                        }}
                      >
                        • {msg}
                      </Typography>
                    ))}
                  </Stack>
                </Paper>

                <Stack direction="row" spacing={1}>
                  <TextField
                    size="small"
                    placeholder="Type message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSendMessage}
                    startIcon={<Send />}
                  >
                    Send
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </ThemeContext.Provider>
  );
};
