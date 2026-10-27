import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Oswald } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { Toaster } from "@/components/Toaster";
import { RevealController } from "@/components/RevealController";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin", "cyrillic"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"], variable: "--font-plex-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin", "cyrillic"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

const description =
  "Демо-сайт металлообработки: лазерная резка, гибка, сварка, окраска. Калькулятор с НДС и запрос КП. Организация вымышлена.";

export const metadata: Metadata = {
  title: { default: "Волга-Металл-Сервис · демо B2B-сайта", template: "%s · Волга-Металл-Сервис" },
  description,
  robots: { index: false, follow: false },
  openGraph: { title: "Волга-Металл-Сервис · демо B2B-сайта", description, type: "website", locale: "ru_RU", siteName: "Волга-Металл-Сервис" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1b1e22",
};

const themeScript = `try{var t=localStorage.getItem('vms-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${oswald.variable} ${plexSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">Перейти к содержимому</a>
        <div className="demo-note">Демо-сайт: предприятие, станки и цены вымышлены</div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
        <Toaster />
        <RevealController />
      </body>
    </html>
  );
}
