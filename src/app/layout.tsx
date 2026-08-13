import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yakamoz Halı Yıkama | Ankara Halı, Koltuk ve Perde Yıkama",
  description:
    "Yakamoz Halı Yıkama; Ankara geneli ücretsiz kapıdan alım-teslim ile halı, koltuk, yorgan, battaniye ve perde yıkamada garantili, güler yüzlü ve titiz hizmet sunar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${jakarta.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
