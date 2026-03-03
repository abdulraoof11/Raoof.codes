import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight:["400","500","600","700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        {/* Title */}
        <title>Raoof.codes</title>

        {/* Meta description */}
        <meta
          name="description"
          content="Raoof.codes – Creative developer portfolio showcasing web development, projects, and services. Let's build something awesome together!"
        />

        {/* Optional: viewport for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}