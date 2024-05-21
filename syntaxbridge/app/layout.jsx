import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";
import { StateProvider } from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SyntaxBridge",
  description: "Compare programming languages syntax",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-[#26292b] dark:bg-[#f7f8f8] text-gray-200 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-200",
          cardBox:
            "bg-[#eceff2] dark:bg-[#0f0f12] text-gray-800 dark:text-gray-200",
          card: "",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <StateProvider>
              <Header />
              {children}
            </StateProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
