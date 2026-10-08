import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UseForm } from "./UseForms/UseForm";
import { Redux } from "./Redux/Redux";
import { ReduxToolkit } from "./ReduxToolkit/ReduxToolkit";
import { Provider } from "react-redux";
import { couterReduxStore } from "./Redux/store";
import { counterStore } from "./ReduxToolkit/stores/counterStore";
import { ContextCouter } from "./Context/ContextCouter";
import { CountProvider } from "./Context/Context";
import { LandingPage } from "./LandingPage";
import Mendleson from "./Mendleson/Mendleson";
import Tailwind from "./tailwind";
import { Box, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const queryClient = new QueryClient();

function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const handleHomeNavigate = (e: React.MouseEvent) => {
    console.log(e);
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
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
      {children}
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

  let content = <LandingPage />;

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
        <Provider store={couterReduxStore}>
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
  }

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>{content}</QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
