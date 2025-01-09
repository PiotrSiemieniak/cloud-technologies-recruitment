import { Box, Typography } from "@mui/material";

export function DashboardFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        borderTop: "1px solid #1e293b",
        px: 8,
      }}
    >
      <Typography sx={{ color: "slategray" }} variant="body2">
        © 2025 Piotr Siemieniak. siemieniak.piotr1@gmail.com
      </Typography>
    </Box>
  );
}
