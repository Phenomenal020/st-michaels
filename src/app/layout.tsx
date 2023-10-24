import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "St Michaels the ArchAngel School",
  description:
    "A Leading nursery/primary school in Makurdi, Benue State. Nigeria",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body className={inter.className}>
        <div className="main-container">
          <Navbar/>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
