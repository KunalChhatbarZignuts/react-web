import React, { useState, useEffect, Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { counterStore } from "./ReduxToolkit/stores/counterStore";
import { CountProvider } from "./Context/Context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";

const UseForm = lazy(() =>
  import("./UseForms/UseForm").then((m) => ({ default: m.UseForm })),
);
const Redux = lazy(() =>
  import("./Redux/Redux").then((m) => ({ default: m.Redux })),
);
const ReduxToolkit = lazy(() =>
  import("./ReduxToolkit/ReduxToolkit").then((m) => ({
    default: m.ReduxToolkit,
  })),
);
const ContextCouter = lazy(() =>
  import("./Context/ContextCouter").then((m) => ({ default: m.ContextCouter })),
);
const LandingPage = lazy(() =>
  import("./LandingPage").then((m) => ({ default: m.LandingPage })),
);
const Mendleson = lazy(() => import("./Mendleson/Mendleson"));
const Tailwind = lazy(() => import("./tailwind"));
const ZustandCount = lazy(() =>
  import("./Zustand/ZustandCount").then((m) => ({ default: m.ZustandCount })),
);
const AxiosApi = lazy(() =>
  import("./Axios/AxiosApi").then((m) => ({ default: m.AxiosApi })),
);

const FirebaseTest = lazy(() =>
  import("./firebase/FirebaseTest").then((m) => ({ default: m.FirebaseTest })),
);

const queryClient = new QueryClient();

function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const handleHomeNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.back();
  };

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
          onClick={handleHomeNavigate}
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          Back to Home
        </Button>
      </Box>
      <Suspense
        fallback={
          <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
            <CircularProgress />
          </Box>
        }
      >
        {children}
      </Suspense>
    </Box>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname || "/",
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  let content = (
    <Suspense
      fallback={
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      }
    >
      <LandingPage />
    </Suspense>
  );

  if (currentPath === "/reduxtoolkit") {
    content = (
      <NavigationWrapper>
        <Provider store={counterStore}>
          <ReduxToolkit />
        </Provider>
      </NavigationWrapper>
    );
  } else if (currentPath === "/redux") {
    content = (
      <NavigationWrapper>
        <Provider store={store}>
          <Redux />
        </Provider>
      </NavigationWrapper>
    );
  } else if (currentPath === "/useform") {
    content = (
      <NavigationWrapper>
        <UseForm />
      </NavigationWrapper>
    );
  } else if (currentPath === "/context") {
    content = (
      <NavigationWrapper>
        <CountProvider>
          <ContextCouter />
        </CountProvider>
      </NavigationWrapper>
    );
  } else if (currentPath === "/mendleson") {
    content = (
      <NavigationWrapper>
        <QueryClientProvider client={queryClient}>
          <Mendleson />
        </QueryClientProvider>
      </NavigationWrapper>
    );
  } else if (currentPath === "/tailwind") {
    content = (
      <NavigationWrapper>
        <Tailwind />
      </NavigationWrapper>
    );
  } else if (currentPath === "/zustand") {
    content = (
      <NavigationWrapper>
        <ZustandCount />
      </NavigationWrapper>
    );
  } else if (currentPath === "/axios") {
    content = (
      <NavigationWrapper>
        <AxiosApi />
      </NavigationWrapper>
    );
  } else if (currentPath === "/firebase") {
    content = (
      <NavigationWrapper>
        <FirebaseTest />
      </NavigationWrapper>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>{content}</QueryClientProvider>
  );
}

export default App;
