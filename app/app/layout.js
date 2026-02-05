export const metadata = {
  title: "Payroll Web",
  description: "Payroll dashboard connected to Supabase"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body style={{ margin: 0, fontFamily: "Arial" }}>{children}</body>
    </html>
  );
}
