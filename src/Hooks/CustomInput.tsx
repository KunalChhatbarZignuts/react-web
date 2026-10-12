import {
  useState,
  useRef,
  useId,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Typography, Stack, TextField } from "@mui/material";

export interface CustomInputRef {
  focusInput: () => void;
  clearInput: () => void;
  getValue: () => string;
}

export const CustomInput = forwardRef<CustomInputRef, { label: string }>(
  (props, ref) => {
    const inputId = useId(); // 7. useId
    const [val, setVal] = useState("");
    const localRef = useRef<HTMLInputElement>(null);

    // 8. useImperativeHandle
    useImperativeHandle(ref, () => ({
      focusInput: () => localRef.current?.focus(),
      clearInput: () => setVal(""),
      getValue: () => val,
    }));

    return (
      <Stack spacing={1}>
        <Typography
          variant="caption"
          component="label"
          htmlFor={inputId}
          sx={{ fontWeight: 600 }}
        >
          {props.label} (ID: {inputId})
        </Typography>
        <TextField
          id={inputId}
          inputRef={localRef}
          size="small"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Type something here..."
          fullWidth
        />
      </Stack>
    );
  },
);
CustomInput.displayName = "CustomInput";
