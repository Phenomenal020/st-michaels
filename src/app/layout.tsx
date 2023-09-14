import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
// import Script from "next/script";
// import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "St Michaels the ArchAngel School",
  description: "A Leading nursery/primary school in Makurdi, Benue State. Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
      {/* <body> */}
        <div className="main-container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script> */}
      </body>
    </html>
  );
}
