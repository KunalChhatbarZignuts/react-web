import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type loginFormData } from "./FirebaseTest.type";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const useFriebaseTest = () => {
  const [authError, setAuthError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onFormSubmit = async (data: loginFormData) => {
    setAuthError("");
    setSuccessMessage("");

    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        data.email.trim(),
        data.password,
      );

      const user = userCred.user;
      setSuccessMessage(`Welcome, ${user.email ?? "user"}!`);
      console.log("Login successful:", {
        uid: user.uid,
        email: user.email,
      });

      await signInWithEmailAndPassword(auth, data.email, data.password);

      setSuccessMessage("Login successful!");
      setAuthError("");

      if (!("Notification" in window)) {
        setAuthError("Your browser does not support notifications.");
        return;
      }

      if (Notification.permission === "granted") {
        new Notification("Login Successful", {
          body: "Welcome! You have logged in successfully.",
        });
      } else if (Notification.permission === "default") {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
          new Notification("Login Successful", {
            body: "Welcome! You have logged in successfully.",
          });
        } else {
          console.log("Notification permission was not granted.");
        }
      } else {
        // Permission is denied. The user must enable it in browser settings.
        console.log("Notifications are blocked in browser settings.");
      }
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case "auth/invalid-credential":
          case "auth/user-not-found":
          case "auth/wrong-password":
            setAuthError("Invalid email or password.");
            break;
          case "auth/user-disabled":
            setAuthError("This account has been disabled.");
            break;

          case "auth/too-many-requests":
            setAuthError("Too many attempts. Please try again later.");
            break;

          case "auth/network-request-failed":
            setAuthError("Network error. Please check your connection.");
            break;

          case "auth/operation-not-allowed":
            setAuthError("Email/password sign-in is not enabled in Firebase.");
            break;

          default:
            setAuthError("Unable to sign in. Please try again.");
        }
      } else {
        setAuthError("An unexpected error occurred.");
      }
    }
    // Firebase Authentication will be added here.
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    setSuccessMessage("");

    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      setSuccessMessage(
        `Welcome, ${user.displayName ?? user.email ?? "user"}!`,
      );
      console.log(user);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/popup-closed-by-user":
            setAuthError("Google sign-in was cancelled.");
            break;

          case "auth/popup-blocked":
            setAuthError("Your browser blocked the sign-in popup.");
            break;

          case "auth/unauthorized-domain":
            setAuthError("This domain is not authorized in Firebase.");
            break;

          default:
            setAuthError("Google sign-in failed. Please try again.");
        }
      } else {
        setAuthError("An unexpected error occurred.");
      }
    }
  };

  return {
    authError,
    successMessage,
    setAuthError,
    setSuccessMessage,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onFormSubmit,
    handleGoogleLogin,
    isShowPassword, setIsShowPassword
  };
};
