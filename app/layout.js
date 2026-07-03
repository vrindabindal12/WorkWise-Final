import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "../components/header";
import { ThemeProvider } from "../components/theme-provider";
import { checkUser } from "../lib/checkUser"; // Import checkUser here


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WorkWise",
  description: "",
};

export default async function RootLayout({ children }) {
  const user = await checkUser(); // Fetch user data on the server

  return (
    <html lang="en" suppressHydrationWarning>
        <head>
        </head>
        <body className={`${inter.className} bg-black text-white/80`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

            <Header user={user} /> {/* Pass user data to Header */}
            <main className="min-h-screen">{children}</main>
            <Toaster richColors theme="dark" />
          </ThemeProvider>
        </body>
    </html>
  );
}
