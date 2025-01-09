"use client";

import React, { useEffect, useState } from "react";
import { Skeleton, Typography, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { getCookie } from "@/utils/getCookie";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export function UserBadge() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const authToken = getCookie("authToken");
    setToken(authToken);
  }, []);

  const handleLogout = () => {
    document.cookie = "authToken=; path=/; max-age=0";
    setToken(null);
    router.push("/");
  };

  if (!token) {
    return (
      <Skeleton
        variant="text"
        width={100}
        height={40}
        animation="wave"
        sx={{ bgcolor: "grey.900" }}
      />
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Typography>{`Hi, ${token}`}</Typography>
      <IconButton onClick={handleLogout} color="primary">
        <LogoutIcon />
      </IconButton>
    </div>
  );
}
