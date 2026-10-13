import type { MessagePayload } from "firebase/messaging";
import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(
      z.email({
        error: "Please enter a valid email address",
      }),
    ),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type loginFormData = z.infer<typeof loginSchema>;


export interface UseFirebaseMessagingReturn {
  token: string;
  notification: MessagePayload | undefined;
  error: string;
  loading: boolean;
  permission: NotificationPermission;
  enableNotification: (customVapidKey?: string) => Promise<string | null>;
}