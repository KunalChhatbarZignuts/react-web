import { useEffect } from "react";
import app from "./firebaseConfig";

export const FirebaseTest = () => {
  useEffect(() => {
    console.log("Firebase connected:", app.name);
    console.log("Firebase project:", app.options.projectId);
    console.log("Firebase appId");
  }, []);

  return <h2>Firebase Setup</h2>;
};
