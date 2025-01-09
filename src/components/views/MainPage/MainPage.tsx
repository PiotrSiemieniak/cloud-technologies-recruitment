"use client";

import React, { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { GetQuoteResponseType } from "@/lib/services/fetch/getQuote";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { PopupLogin } from "@/components/ui/PopupLogin";

export function MainPage({ quote }: { quote: GetQuoteResponseType[] }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const data = quote[0];

  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        maxWidth={600}
        mx={"auto"}
        gap={2}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: "14px" }}
          gutterBottom
        >
          Main page
        </Typography>
        <QuoteSection quote={data} />
        <Button variant="contained" color="primary" onClick={handleOpenLogin}>
          Sign in
        </Button>
      </Box>
      <PopupLogin open={isLoginOpen} onClose={handleCloseLogin} />
    </Container>
  );
}
