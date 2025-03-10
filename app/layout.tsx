import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./utils/ThemeProvider";
import { LanguageProvider } from "./utils/LanguageProvider";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg text-text relative`}>
        <ThemeProvider>
          <LanguageProvider>
          <Header />
          <Particles/>
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
