import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/custom/Header";
import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Diwakar Jha",
  description: "Portfolio Website of Diwakar Jha to show case his skills",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#0A192F] text-[#fff]`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
