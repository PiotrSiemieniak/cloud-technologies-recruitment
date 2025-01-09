import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAdsListAction } from "@/hooks/ctx/useAdsListAction";

export type AdRowElementType = {
  title: string;
  desc: string;
  startDate: Date;
  endDate: Date;
};

export function AdRowElement({
  ad,
  index,
}: {
  ad: AdRowElementType;
  index: number;
}) {
  const { showEditPopup, deleteAd } = useAdsListAction();

  const handleDeleteIcon = () => deleteAd(index);
  const handleEditIcon = () => showEditPopup(index);

  return (
    <ListItem key={index} divider>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <ListItemText
          primary={ad.title}
          secondary={
            <>
              <Typography component="span" variant="body2" color="#94a3b8">
                {ad.desc}
              </Typography>
              <br />
              <Typography component="span" variant="body2" color="#94a3b8">
                {`From: ${ad.startDate.toDateString()} to: ${ad.endDate.toDateString()}`}
              </Typography>
            </>
          }
        />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#0f172a",
            height: "fit-content",
            my: "auto",
            p: 0.5,
            borderRadius: 2,
          }}
        >
          <IconButton
            color="primary"
            aria-label="edit"
            onClick={handleEditIcon}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            aria-label="delete"
            onClick={handleDeleteIcon}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  );
}
