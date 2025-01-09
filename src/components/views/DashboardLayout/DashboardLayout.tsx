"use client";

import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { DashboardHeader } from "./partials/DashboardHeader";
import { DashboardFooter } from "./partials/DashboardFooter";
import { AdsListProvider } from "@/context/AdsListProvider";
import { EditAdPopup } from "@/components/ui/EditAdPopup";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "full",
      }}
    >
      <AdsListProvider>
        <DashboardHeader />
        {children}
        <DashboardFooter />

        <EditAdPopup />
      </AdsListProvider>
    </Box>
  );
};

export default DashboardLayout;
