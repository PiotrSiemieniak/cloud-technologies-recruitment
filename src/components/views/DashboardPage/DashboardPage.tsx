import { Container, Box } from "@mui/material";
import { DashboardPageInfoSection } from "./partials/DashboardPageInfoSection";
import { DashboardPageContentSection } from "./partials/DashboardPageContentSection";

export function DashboardPage() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        mx={"auto"}
        gap={2}
      >
        <DashboardPageInfoSection />
        <DashboardPageContentSection />
      </Box>
    </Container>
  );
}
