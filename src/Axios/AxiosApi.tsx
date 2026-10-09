import { Suspense, lazy, useRef, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

// Lazy load the Users component to reduce the initial bundle size
const Users = lazy(() =>
  import("./components/Users").then((module) => ({ default: module.Users })),
);

export const AxiosApi = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  console.log("Form render:", renderCount.current);
  return (
    <div>
      <h1 className="p-2 text-4xl font-bold wrap-normal">
        Axios Demo #{renderCount.current}
      </h1>
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-4">
            <CircularProgress />
          </div>
        }
      >
        <Users />
      </Suspense>
    </div>
  );
};
