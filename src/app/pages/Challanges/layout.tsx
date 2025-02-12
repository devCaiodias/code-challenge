import MainContainer from "../../components/layout/MainContainer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
          <MainContainer>
            {children}  

          </MainContainer>
      </body>
    </html>
  );
}
