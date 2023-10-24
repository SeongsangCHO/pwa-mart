//import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "My App",
//   description: "My App is a...",
// };

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
