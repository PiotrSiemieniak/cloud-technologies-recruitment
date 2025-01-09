"use client";

import React from "react";
import { Container, Typography, Box, IconButton, Tooltip } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAdsListAction } from "@/hooks/ctx/useAdsListAction";
import { COUNT_OF_RANDOM_ADS } from "@/lib/const/const";
import AddIcon from "@mui/icons-material/Add";

export const DashboardPageInfoSection = () => {
  const { clearAllAds, generateRandomAds, showCreateNewAdPopup } =
    useAdsListAction();

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "24px" }}
        gutterBottom
      >
        Dashboard
      </Typography>
      <Typography>
        Browse the list of items. Create, edit and delete ads from the database.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 2,
          gap: 2,
        }}
      >
        <Tooltip title="Create new ad">
          <IconButton
            onClick={showCreateNewAdPopup}
            sx={{
              "&:hover": {
                backgroundColor: "#0f172a",
                borderRadius: 1,
              },
            }}
            color="success"
            aria-label="create"
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={`Generate random ${COUNT_OF_RANDOM_ADS} ads`}>
          <IconButton
            onClick={generateRandomAds}
            sx={{
              "&:hover": {
                backgroundColor: "#0f172a",
                borderRadius: 1,
              },
            }}
            color="primary"
            aria-label="shuffle"
          >
            <ShuffleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Clear all ads">
          <IconButton
            onClick={clearAllAds}
            sx={{
              "&:hover": {
                backgroundColor: "#0f172a",
                borderRadius: 1,
              },
            }}
            color="secondary"
            aria-label="delete all"
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Container>
  );
};
