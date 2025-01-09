import DashboardLayout from "@/components/views/DashboardLayout/DashboardLayout";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

export default RootLayout;
