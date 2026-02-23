import { Suspense } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Navbar from "@/components/Navbar/Navbar";

import "./globals.css";

export const metadata = {
  title: "Algora | Sudo Sapient",
  description: "CGMWT JAN 2025 by Sudo Sapient",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <ProgressBar />
        </Suspense>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
