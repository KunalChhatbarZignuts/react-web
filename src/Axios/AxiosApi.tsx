import { useRef } from "react";
import { Users } from "./components/Users";

export const AxiosApi = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  console.log("Form render:", renderCount.current);
  return (
    <div>
      <h1 className="p-2 text-4xl font-bold  wrap-normal">
        Axios Demo {renderCount.current}
      </h1>
      <Users />
    </div>
  );
};
