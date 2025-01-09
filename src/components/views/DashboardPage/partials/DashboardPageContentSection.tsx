import { AdsList } from "@/components/sections/AdsList";
import { Container, Typography } from "@mui/material";

export const DashboardPageContentSection = () => {
  return (
    <Container sx={{ width: "100%", maxWidth: "1200px", height: "100%" }}>
      <AdsList />
      <Typography
        sx={{ marginTop: 2, color: "#64748b", fontSize: "14px" }}
        align="center"
      >
        In the section to the left you have buttons to create random list items
      </Typography>
    </Container>
  );
};
