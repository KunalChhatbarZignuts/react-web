import { getToken, onMessage, type MessagePayload } from "firebase/messaging";
import { useCallback, useEffect, useState } from "react";
import { getFirebaseMessaging } from "./firebaseMessaging";

const defaultVapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY;

export interface UseFirebaseMessagingReturn {
  token: string;
  notification: MessagePayload | undefined;
  error: string;
  loading: boolean;
  permission: NotificationPermission;
  enableNotification: (customVapidKey?: string) => Promise<string | null>;
}

export const useFirebaseMessaging = (): UseFirebaseMessagingReturn => {
  const [token, setToken] = useState("");
  const [notification, setNotification] = useState<MessagePayload | undefined>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission>(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      return Notification.permission;
    }
    return "default";
  });

  const enableNotification = useCallback(
    async (customVapidKey?: string): Promise<string | null> => {
      setError("");
      setLoading(true);

      try {
        if (typeof window === "undefined" || !("Notification" in window)) {
          const errMsg = "This browser does not support push notifications.";
          setError(errMsg);
          setLoading(false);
          return null;
        }

        if (!("serviceWorker" in navigator)) {
          const errMsg = "This browser does not support service workers.";
          setError(errMsg);
          setLoading(false);
          return null;
        }

        const currentPermission = await Notification.requestPermission();
        setPermission(currentPermission);

        if (currentPermission !== "granted") {
          const errMsg = "Notification permission was not granted.";
          setError(errMsg);
          setLoading(false);
          return null;
        }

        const vapidKey = customVapidKey || defaultVapidKey;
        if (!vapidKey) {
          console.warn(
            "Firebase VAPID key is not set. If token generation fails, set VITE_FIREBASE_VAPID_KEY in .env.",
          );
        }

        const messaging = await getFirebaseMessaging();
        if (!messaging) {
          const errMsg = "Firebase Messaging is not supported in this browser.";
          setError(errMsg);
          setLoading(false);
          return null;
        }

        const registration = await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js",
          { scope: "/" },
        );

        await navigator.serviceWorker.ready;

        const tokenOptions: {
          serviceWorkerRegistration: ServiceWorkerRegistration;
          vapidKey?: string;
        } = {
          serviceWorkerRegistration: registration,
        };

        if (vapidKey) {
          tokenOptions.vapidKey = vapidKey;
        }

        const fcmToken = await getToken(messaging, tokenOptions);

        if (!fcmToken) {
          const errMsg = "Unable to generate the FCM token.";
          setError(errMsg);
          setLoading(false);
          return null;
        }

        setToken(fcmToken);
        console.log("FCM Token generated successfully:", fcmToken);

        onMessage(messaging, (payload) => {
          console.log("Foreground notification received:", payload);
          setNotification(payload);

          if ("Notification" in window && Notification.permission === "granted") {
            const title =
              payload.notification?.title ||
              (payload.data?.title as string) ||
              "New Notification";
            const body =
              payload.notification?.body ||
              (payload.data?.body as string) ||
              "";
            const icon = payload.notification?.icon || "/favicon.ico";

            try {
              new Notification(title, {
                body,
                icon,
                data: payload.data,
              });
            } catch (err) {
              console.error("Failed to show native browser notification:", err);
            }
          }
        });

        setLoading(false);
        return fcmToken;
      } catch (err: unknown) {
        console.error("FCM setup failed:", err);
        const errMsg =
          err instanceof Error ? err.message : "Unable to enable notifications.";
        setError(errMsg);
        setLoading(false);
        return null;
      }
    },
    [],
  );

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "granted" && !token) {
        Promise.resolve().then(() => {
          enableNotification();
        });
      }
    }
  }, [enableNotification, token]);

  return {
    token,
    notification,
    error,
    loading,
    permission,
    enableNotification,
  };
};

// {
//     curl -X POST https://fcm.googleapis.com/fcm/send \
//       -H "Content-Type: application/json" \
//       -H "Authorization: key=YOUR_FIREBASE_SERVER_KEY" \
//       -d '{
//         "to": "YOUR_FCM_REGISTRATION_TOKEN",
//         "notification": {
//           "title": "Hello from Postman!",
//           "body": "This is a test notification sent via cURL/Postman.",
//           "icon": "/favicon.ico"
//         },
//         "data": {
//           "title": "Hello from Postman!",
//           "body": "This is a test notification sent via cURL/Postman."
//         }
//       }'
// }
//
