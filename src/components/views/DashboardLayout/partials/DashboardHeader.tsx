import { UserBadge } from "@/components/ui/UserBadge";
import { AppBar, Toolbar, Typography } from "@mui/material";

export function DashboardHeader() {
  return (
    <AppBar
      sx={{
        background: "none",
        paddingX: 8,
        borderBottom: "1px solid #1e293b",
      }}
      position="relative"
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin dashboard
        </Typography>
        <UserBadge />
      </Toolbar>
    </AppBar>
  );
}
