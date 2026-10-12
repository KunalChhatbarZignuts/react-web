import { lazy, Suspense } from "react";
import { Routes, Route, Outlet, useNavigate, Navigate } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { counterStore } from "./ReduxToolkit/stores/counterStore";
import { CountProvider } from "./Context/Context";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBack from "@mui/icons-material/ArrowBack";

// Lazy-loaded components
const LandingPage = lazy(() =>
  import("./LandingPage").then((m) => ({
    default: m.LandingPage,
  })),
);

const UseForm = lazy(() =>
  import("./UseForms/UseForm").then((m) => ({
    default: m.UseForm,
  })),
);

const Redux = lazy(() =>
  import("./Redux/Redux").then((m) => ({
    default: m.Redux,
  })),
);

const ReduxToolkit = lazy(() =>
  import("./ReduxToolkit/ReduxToolkit").then((m) => ({
    default: m.ReduxToolkit,
  })),
);

const ContextCouter = lazy(() =>
  import("./Context/ContextCouter").then((m) => ({
    default: m.ContextCouter,
  })),
);

const Mendleson = lazy(() => import("./Mendleson/Mendleson"));
const Tailwind = lazy(() => import("./tailwind"));

const ZustandCount = lazy(() =>
  import("./Zustand/ZustandCount").then((m) => ({
    default: m.ZustandCount,
  })),
);

const AxiosApi = lazy(() =>
  import("./Axios/AxiosApi").then((m) => ({
    default: m.AxiosApi,
  })),
);

const FirebaseTest = lazy(() =>
  import("./firebase/FirebaseTest").then((m) => ({
    default: m.FirebaseTest,
  })),
);

const Hooks = lazy(() =>
  import("./Hooks/hooks").then((m) => ({
    default: m.Hooks,
  })),
);

// Shared loading component
function PageLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        p: 4,
      }}
    >
      <CircularProgress />
    </Box>
  );
}

// Layout for demo pages
function NavigationWrapper() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          bgcolor: "background.paper",
          boxShadow: 1,
          px: 4,
          py: 1.5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/", { replace: true })}
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Button>
      </Box>

      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}

// Application routes
export function AppRoutes() {
  return (
    <Routes>
      {/* Home page */}
      <Route
        path="/"
        element={
          <Suspense fallback={<PageLoader />}>
            <LandingPage />
          </Suspense>
        }
      />

      {/* Pages with shared navigation */}
      <Route element={<NavigationWrapper />}>
        <Route
          path="/reduxtoolkit"
          element={
            <Provider store={counterStore}>
              <ReduxToolkit />
            </Provider>
          }
        />

        <Route
          path="/redux"
          element={
            <Provider store={store}>
              <Redux />
            </Provider>
          }
        />

        <Route path="/useform" element={<UseForm />} />

        <Route
          path="/context"
          element={
            <CountProvider>
              <ContextCouter />
            </CountProvider>
          }
        />

        <Route path="/mendleson" element={<Mendleson />} />

        <Route path="/tailwind" element={<Tailwind />} />

        <Route path="/zustand" element={<ZustandCount />} />

        <Route path="/axios" element={<AxiosApi />} />

        <Route path="/firebase" element={<FirebaseTest />} />

        <Route path="/hooks" element={<Hooks />} />
      </Route>

      {/* Unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
