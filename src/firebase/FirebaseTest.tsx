import { useEffect } from "react";
import app from "./firebaseConfig";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Card,
  Button,
  InputAdornment,
  Alert,
  CircularProgress,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import { useFriebaseTest } from "./useFriebaseTest";
import { Google } from "@mui/icons-material";
import { useFirebaseMessaging } from "./useFirebaseMessaging";

export const FirebaseTest = () => {
  const {
    authError,
    successMessage,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onFormSubmit,
    handleGoogleLogin,
  } = useFriebaseTest();
  const {
    token,
    notification,
    error: messagingError,
    loading: messagingLoading,
    permission,
    enableNotification,
  } = useFirebaseMessaging();

  useEffect(() => {
    console.log("Firebase connected:", app.name);
    console.log("Firebase project:", app.options.projectId);
    console.log("Firebase appId:", app.options.appId);
    if (token) {
      console.log("FCM Registration Token:", token);
    }
  }, [token]);

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "content-box",
        background: "linear-gradient(255deg, #f5f7ff , #eef2ff 0%, #f8fafc 0%)",
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          borderColor: "rgba(148, 163, 184, 0.2)",
          boxShadow: "0 20px 60px rgba(37, 55, 100, 0.20)",
          boxSizing: "border-box",
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
          <Stack spacing={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "self-start",
                justifyContent: "start",
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 3,
                  color: "#ffffff",
                  background: "linear-gradient(135deg, #3b82f6, #4f46e5)",
                  boxShadow: "0 8px 20px rgba(79, 70, 229, 0.25)",
                }}
              >
                <LocalFireDepartmentOutlinedIcon sx={{ fontSize: 32 }} />
              </Box>
              <Box sx={{ textAlign: "center", mx: "auto" }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#172554",
                    letterSpacing: "-0.8px",
                    mb: 1,
                  }}
                >
                  Welcome back
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Sign in to continue to your account
                </Typography>
              </Box>
            </Box>

            {authError && (
              <Alert severity="error" sx={{ borderRadius: 2 }}>
                {authError}
              </Alert>
            )}

            {successMessage && (
              <Alert severity="success" sx={{ borderRadius: 2 }}>
                {successMessage}
              </Alert>
            )}

            {notification && (
              <Alert severity="info" sx={{ borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {(notification.notification?.title as string) ||
                    (notification.data?.title as string) ||
                    "Notification Received"}
                </Typography>
                <Typography variant="body2">
                  {(notification.notification?.body as string) ||
                    (notification.data?.body as string) ||
                    ""}
                </Typography>
              </Alert>
            )}

            {messagingError && (
              <Alert severity="warning" sx={{ borderRadius: 2 }}>
                {messagingError}
              </Alert>
            )}

            <Stack spacing={2}>
              <TextField
                {...register("email")}
                id="email"
                label="Email address"
                type="email"
                fullWidth
                autoComplete="email"
                placeholder="you@example.com"
                error={!!errors.email}
                helperText={errors.email?.message}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2.5,
                    backgroundColor: "#ffffff",
                  },
                }}
              />

              <TextField
                {...register("password")}
                id="password"
                label="Password"
                type="password"
                fullWidth
                autoComplete="current-password"
                placeholder="Enter your password"
                error={!!errors.password}
                helperText={errors.password?.message}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2.5,
                    backgroundColor: "#ffffff",
                  },
                }}
              />
            </Stack>

            <Button
              variant="contained"
              fullWidth
              size="large"
              type="submit"
              disabled={isSubmitting}
              sx={{
                py: 1.5,
                borderRadius: 2.5,
                textTransform: "none",
                fontSize: 16,
                fontWeight: 600,
                background: "linear-gradient(135deg, #3b82f6, #4f46e5)",
                boxShadow: "0 6px 16px rgba(79, 70, 229, 0.22)",
                "&:hover": {
                  background: "linear-gradient(135deg, #2563eb, #4338ca)",
                  boxShadow: "0 8px 20px rgba(79, 70, 229, 0.3)",
                },
              }}
            >
              {isSubmitting ? (
                <CircularProgress
                  size={32}
                  sx={{
                    color: "white",
                  }}
                />
              ) : (
                "Login"
              )}
            </Button>

            <Button
              variant="outlined"
              fullWidth
              size="large"
              type="button"
              onClick={handleGoogleLogin}
              sx={{
                py: 1.5,
                borderRadius: 2.5,
                textTransform: "none",
                fontSize: 16,
                fontWeight: 600,
                color: "#334155",
                borderColor: "#cbd5e1",
                backgroundColor: "#ffffff",
                "&:hover": {
                  backgroundColor: "#f8fafc",
                  borderColor: "#94a3b8",
                },
              }}
              startIcon={<Google sx={{ fontSize: 32 }} />}
            >
              Sign in with Google
            </Button>

            {permission !== "granted" && (
              <Button
                variant="text"
                fullWidth
                disabled={messagingLoading}
                onClick={() => enableNotification()}
                sx={{ textTransform: "none", fontWeight: 600 }}
              >
                {messagingLoading
                  ? "Enabling Notifications..."
                  : "Enable Push Notifications"}
              </Button>
            )}
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
