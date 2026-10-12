# 📗 React Component & Feature Ledger

A comprehensive, interactive React 19 & TypeScript web application designed as a feature showcase and learning repository for modern React development practices, state management architectures, UI frameworks, form validation, and API integrations.

---

## 🚀 Key Features & Demos

The project includes an interactive landing page dashboard (`/`) routing to 10 distinct feature modules and demos:

| Module | Route | Technologies Used | Description |
| :--- | :--- | :--- | :--- |
| **Redux Toolkit** | `/reduxtoolkit` | `@reduxjs/toolkit`, `react-redux` | Modern Redux state management using slices, actions, and typed store configuration. |
| **Redux (Classic)** | `/redux` | `redux`, `react-redux` | Traditional Redux implementation with custom action types, reducers, and store subscription. |
| **Zustand** | `/zustand` | `zustand` | Lightweight, unopinionated state management using centralized Zustand stores and actions. |
| **Context API Counter**| `/context` | React Context API, `useContext` | Global state management across component hierarchies using custom Context Providers. |
| **React Hook Form** | `/useform` | `react-hook-form`, `zod`, `@mui/material` | High-performance form handling with schema validation (Zod) and Material UI controls. |
| **Axios Integration** | `/axios` | `axios`, TypeScript | Service-oriented REST API integration with reusable HTTP client instances and loading states. |
| **Firebase Integration**| `/firebase` | `firebase` v13 (Auth & Firestore) | Cloud services integration demonstrating Firebase Authentication and Firestore database CRUD operations. |
| **React Hooks Showcase**| `/hooks` | React Core Hooks | In-depth examples of core React hooks (`useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`, `useContext`, `useReducer`, custom hooks). |
| **Mendleson App & API** | `/mendleson` | `@tanstack/react-query`, Custom CSS | Full-fledged responsive agency landing page integrated with TanStack Query for remote user data fetching. |
| **Tailwind CSS Showcase**| `/tailwind` | Tailwind CSS v4 | Interactive UI showcase featuring responsive grids, flex layouts, card designs, and utility classes. |

---

## 🛠️ Tech Stack

### Core Framework & Build Tools
- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5.6+](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)

### State Management
- **Redux Toolkit** (`@reduxjs/toolkit`) & Classic Redux
- **Zustand** (`zustand`)
- **React Context API**

### Data Fetching & Async Operations
- **TanStack React Query** (`@tanstack/react-query` v5)
- **Axios** (`axios` v1.x)

### Forms & Validation
- **React Hook Form** (`react-hook-form` v7)
- **Zod Schema Validation** (`zod` v4)

### UI & Styling
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Material UI** (`@mui/material`, `@mui/icons-material`)
- **Emotion** (`@emotion/react`, `@emotion/styled`)

### Backend Services
- **Firebase** (`firebase` v13 - Authentication & Firestore)

---

## 📂 Project Structure

```text
ledger/
├── public/                  # Public assets (icons, favicons)
├── src/
│   ├── Axios/               # Axios API client, types, and components
│   │   ├── api/             # axiosInstance & userApi services
│   │   ├── components/      # User management UI
│   │   └── type/            # TypeScript data models
│   ├── Context/             # React Context API provider & counter demo
│   ├── Hooks/               # React Hooks examples & custom hooks
│   ├── Mendleson/           # Agency layout, custom CSS & React Query integration
│   ├── Redux/               # Classic Redux store, actions, & reducers
│   ├── ReduxToolkit/        # Redux Toolkit slice stores & components
│   ├── UseForms/            # React Hook Form + Zod validation examples
│   ├── Zustand/             # Zustand state management store & components
│   ├── assets/              # SVG graphics & brand vectors
│   ├── firebase/            # Firebase SDK configuration & test components
│   ├── App.tsx              # Root app component with React Query setup
│   ├── AppRoutes.tsx        # Central router configuration & lazy loading layout
│   ├── LandingPage.tsx      # Dashboard homepage with feature cards navigation
│   └── main.tsx             # Application entry point
├── package.json             # Project dependencies and npm scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration with Tailwind CSS plugin
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KunalChhatbarZignuts/react-web.git
   cd ledger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Development Server

Start the local development server with Vite:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available NPM Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts the Vite development server with HMR. |
| `npm run build` | `tsc -b && vite build` | Type-checks with TypeScript and creates an optimized production build. |
| `npm run preview` | `vite preview` | Previews the production build locally. |
| `npm run lint` | `eslint .` | Runs ESLint to check for code quality and style issues. |

---

## 🤝 Repository Information

- **Repository:** [GitHub - KunalChhatbarZignuts/react-web](https://github.com/KunalChhatbarZignuts/react-web.git)
- **License:** ISC
