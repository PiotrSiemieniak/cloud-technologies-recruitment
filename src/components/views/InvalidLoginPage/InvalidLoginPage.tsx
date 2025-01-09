"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import { getCookie } from "@/utils/getCookie";

export function InvalidLoginPage() {
  const router = useRouter();

  // tym razem zamiast użyć middleware'u, użyjemy hooka useEffect
  useEffect(() => {
    const authToken = getCookie("authToken");
    if (authToken) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Invalid password
      </Typography>
      <Typography variant="body1" gutterBottom>
        The password you entered is incorrect. Please try again.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Home
      </Button>
    </Box>
  );
}
