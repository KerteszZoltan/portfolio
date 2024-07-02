import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/modules/common/styles/global.scss";
import Navigation from "@/modules/common/components/navigation/navigation";
import { contactData } from "@/modules/common/data/navigationData";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navigation navigation={contactData} />
      </body>
    </html>
  );
}
