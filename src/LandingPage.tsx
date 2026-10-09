import type React from "react";
import { Box, Typography, Card, CardActionArea } from "@mui/material";
import {
  Code,
  Storage,
  Assignment,
  Layers,
  Web,
  Palette,
  Menu,
  Api,
  WhatshotSharp,
} from "@mui/icons-material";

interface ComponentItem {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

const componentsList: ComponentItem[] = [
  {
    id: "reduxtoolkit",
    name: "Redux Toolkit",
    description:
      "Modern Redux state management with slices, actions, and typed hooks.",
    path: "/reduxtoolkit",
    icon: <Code color="primary" fontSize="large" />,
  },
  {
    id: "redux",
    name: "Redux (Classic)",
    description:
      "Classic Redux implementation with custom store, reducers, and dispatch.",
    path: "/redux",
    icon: <Storage color="secondary" fontSize="large" />,
  },
  {
    id: "useform",
    name: "useForm (React Hook Form)",
    description:
      "Performant form validation and handling with Material-UI and Zod.",
    path: "/useform",
    icon: <Assignment color="success" fontSize="large" />,
  },
  {
    id: "context",
    name: "Context API Counter",
    description:
      "Global state sharing across components using React Context API.",
    path: "/context",
    icon: <Layers color="info" fontSize="large" />,
  },
  {
    id: "mendleson",
    name: "Mendleson App & API",
    description:
      "Full responsive layout with TanStack React Query and remote user fetching.",
    path: "/mendleson",
    icon: <Web color="warning" fontSize="large" />,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS Demo",
    description:
      "Showcase of Tailwind CSS utilities, responsive grids, flex, and dark mode.",
    path: "/tailwind",
    icon: <Palette sx={{ color: "purple" }} fontSize="large" />,
  },
  {
    id: "zustand",
    name: "Zustand",
    description:
      "Learn Zustand state management by creating a simple counter with a centralized store and actions.",
    path: "/zustand",
    icon: <Menu />,
  },
  {
    id: "axios",
    name: "Axios",
    description:
      "Learn Axios API integration in React by making GET, POST, PUT, and DELETE requests with reusable API services, error handling, and loading states. ",
    path: "/axios",
    icon: <Api />,
  },
  {
    id: "firebase",
    name: "Firebase",
    description:
      "Learn Firebase integration in React with Firebase Authentication, Cloud Firestore, and CRUD operations using reusable services, error handling, and loading states.",
    path: "/firebase",
    icon: <WhatshotSharp />,
  },
];

export const LandingPage = () => {
  const handleNavigate = (path: string, error: React.MouseEvent) => {
    console.log(error);
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Box
      sx={{
        py: 0,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 700, color: "#1e293b", mb: 2 }}
        >
          React Component & Feature Ledger
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#64748b", maxWidth: 700, mx: "auto" }}
        >
          Welcome to the root page (`/`). Explore all the built-in components,
          state management systems, forms, and UI demos below. Click any card to
          navigate to that specific page.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
        }}
      >
        {componentsList.map((item) => (
          <Card
            key={item.id}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              },
            }}
          >
            <CardActionArea
              onClick={(e) => handleNavigate(item.path, e)}
              sx={{
                flexGrow: 1,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                height: "100%",
              }}
            >
              <Box sx={{ mb: 2, p: 1.5, bgcolor: "#f1f5f9", borderRadius: 2 }}>
                {item.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#0f172a", mb: 1 }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#475569", lineHeight: 1.6 }}
              >
                {item.description}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
