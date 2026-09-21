import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import "./globals.css";

export const metadata = {
  title: "PREMO",
  description: "Remonty kapitalne obrabiarek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}