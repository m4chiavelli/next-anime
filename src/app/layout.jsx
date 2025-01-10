import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const nunito = localFont({
  src: "./fonts/Nunito/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  weight: "400 800",
});

const poppins = localFont({
  src: "./fonts/Poppins/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "400 800",
});

export const metadata = {
  title: "Nonton Anime Aja Daripada Ngoding!",
  description: "Daripada ngoding, mending nonton anime aja!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased text-color-font`}
        suppressHydrationWarning
      >
        <Navbar className={`${poppins.className}`} />
        {children}
      </body>
    </html>
  );
}
