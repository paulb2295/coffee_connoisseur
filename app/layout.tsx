import type { Metadata } from "next";
import './global.css';
import { IBM_Plex_Sans, /*Inter*/} from "next/font/google";
import React, {ReactNode} from "react";

const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', "700"],
  variable: '--font-ibmplexsans'
});

// const inter = Inter({
//   display: 'swap',
//   subsets: ['latin'],
//   variable: '--font-roboto'
// })

export const metadata: Metadata = {
  title: "Coffee Connoisseur",
  description: "Discover the best coffee shops in town!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
       {/*`${ibmPlexSans.variable} ${inter.variable}`}*/}
       {children}
      </body>
    </html>
  );
}
