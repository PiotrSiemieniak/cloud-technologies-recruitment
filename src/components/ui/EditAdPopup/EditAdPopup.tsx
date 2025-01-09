import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useAdsListState } from "@/hooks/ctx/useAdsListState";
import { useAdsListAction } from "@/hooks/ctx/useAdsListAction";
import { isTitleUnique } from "@/utils/isTitleUnique";

export const EditAdPopup: React.FC = () => {
  const { editedAd, ads, isCreatePopupOpen } = useAdsListState();
  const { editAd, hideEditPopup, createAd, hideCreateNewAdPopup } =
    useAdsListAction();

  const ad = editedAd !== null ? ads[editedAd] : null;
  const isPopupOpen = editedAd !== null || isCreatePopupOpen;

  const [title, setTitle] = useState(ad?.title || "");
  const [desc, setDesc] = useState(ad?.desc || "");
  const [startDate, setStartDate] = useState(
    ad?.startDate.toISOString().split("T")[0] || ""
  );
  const [endDate, setEndDate] = useState(
    ad?.endDate.toISOString().split("T")[0] || ""
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ad) {
      setTitle(ad.title);
      setDesc(ad.desc);
      setStartDate(ad.startDate.toISOString().split("T")[0]);
      setEndDate(ad.endDate.toISOString().split("T")[0]);
    } else {
      setTitle("");
      setDesc("");
      setStartDate("");
      setEndDate("");
    }
    setError(null);
  }, [ad]);

  const handleSave = () => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (!title || !desc || !startDate || !endDate) {
      setError("All fields must be filled.");
      return;
    }

    if (!isTitleUnique(ads, title, editedAd)) {
      setError("Title must be unique.");
      return;
    }

    if (start < now) {
      setError("Start date cannot be in the past.");
      return;
    }

    if (end < start) {
      setError("End date cannot be earlier than start date.");
      return;
    }

    if (editedAd !== null) {
      editAd(editedAd, {
        ...ad,
        title,
        desc,
        startDate: start,
        endDate: end,
      });
    } else {
      createAd({
        title,
        desc,
        startDate: start,
        endDate: end,
      });
    }
    hideEditPopup();
    hideCreateNewAdPopup();
  };

  const handleClose = () => {
    hideEditPopup();
    hideCreateNewAdPopup();
  };

  return (
    <Dialog open={isPopupOpen} onClose={handleClose}>
      <DialogTitle>{editedAd !== null ? "Edit Ad" : "Create Ad"}</DialogTitle>
      <DialogContent>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Start Date"
          type="date"
          fullWidth
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          margin="dense"
          label="End Date"
          type="date"
          fullWidth
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
