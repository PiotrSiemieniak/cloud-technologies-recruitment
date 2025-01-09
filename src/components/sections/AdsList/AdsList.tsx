"use client";

import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { AdRowElement } from "@/components/ui/AdRowElement";
import { useAdsListState } from "@/hooks/ctx/useAdsListState";

export function AdsList() {
  const { ads } = useAdsListState();

  return (
    <Box
      sx={{
        maxHeight: "80vh",
        width: "100%",
        overflowY: "auto",
        padding: 2,
        border: "1px solid #1e293b",
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Ads List
      </Typography>
      <List>
        {ads.map((ad, index) => (
          <AdRowElement key={index} ad={ad} index={index} />
        ))}
        {ads.length === 0 && (
          <ListItem>
            <ListItemText
              primary="No ads found"
              secondary="Create a new ad to see it here"
              sx={{
                textAlign: "center",
                "& .MuiListItemText-secondary": {
                  color: "#64748b",
                },
              }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );
}
