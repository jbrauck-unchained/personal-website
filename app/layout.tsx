import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Joe Brauckmann | Product Manager & Developer",
  description: "Product Manager at Unchained specializing in mobile apps, Bitcoin technology, and AI automation. Building the future of financial sovereignty.",
  keywords: ["Product Manager", "iOS", "Android", "Bitcoin", "Unchained", "Software Developer", "KMP", "Compose Multiplatform"],
  authors: [{ name: "Joe Brauckmann" }],
  openGraph: {
    title: "Joe Brauckmann | Product Manager & Developer",
    description: "Product Manager at Unchained specializing in mobile apps, Bitcoin technology, and AI automation.",
    url: "https://brauckmann.xyz",
    siteName: "Joe Brauckmann Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Brauckmann | Product Manager & Developer",
    description: "Product Manager at Unchained specializing in mobile apps, Bitcoin technology, and AI automation.",
    creator: "@rnutstink",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
