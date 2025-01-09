"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { DEFAULT_ADMIN_PASS } from "@/lib/const/const";
import { setLocalSession } from "@/utils/setLocalSession";

interface PopupLoginProps {
  open: boolean;
  onClose: () => void;
}

export const PopupLogin: React.FC<PopupLoginProps> = ({ open, onClose }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Przykład logiki logowania
    if (password === DEFAULT_ADMIN_PASS) {
      setLocalSession(login);
      router.push("/dashboard");
    } else {
      router.push("/invalid-login");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Logowanie</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Login"
          margin="dense"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <TextField
          fullWidth
          label="Hasło"
          margin="dense"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Typography align="center" variant="body2" color="textSecondary">
          Default password is: <strong>{DEFAULT_ADMIN_PASS}</strong>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary">
          Sign in
        </Button>
      </DialogActions>
    </Dialog>
  );
};
