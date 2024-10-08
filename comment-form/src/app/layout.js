import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fakebook",
  description: "Fakebook: Where Connections Are Limitless, and Reality is Optional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <header className="w-full py-4 bg-blue-600 text-white text-3xl font-bold text-center">
        FAKEBOOK
      </header>
        <NavBar/>
        {children}
        <footer className="w-full py-2 bg-blue-600 text-white text-center mt-auto">
        ©Lewis Allen 2024
      </footer>
      </body>
    </html>
  );
}
