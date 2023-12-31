import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nusra Hotel and Spa",
  description: "Discover a world where opulence meets serenity",
};

export default function RootLayout({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header bg={bg} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
