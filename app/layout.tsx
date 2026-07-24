import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Joe Brauckmann | Senior Product Manager",
  description:
    "Joe Brauckmann is a Senior Product Manager at Unchained. Work across quality, release systems, mobile apps, and the client journey.",
  keywords: [
    "Senior Product Manager",
    "Product Strategy",
    "Client Journey",
    "iOS",
    "Android",
    "Fintech",
    "Bitcoin",
    "Unchained",
  ],
  authors: [{ name: "Joe Brauckmann" }],
  openGraph: {
    title: "Joe Brauckmann | Senior Product Manager",
    description:
      "Work across quality, release systems, mobile apps, and the client journey.",
    url: "https://brauckmann.xyz",
    siteName: "Joe Brauckmann",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Brauckmann | Senior Product Manager",
    description:
      "Work across quality, release systems, mobile apps, and the client journey.",
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
              (() => {
                const root = document.documentElement;
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
                  const theme = savedTheme === 'light' || savedTheme === 'dark'
                    ? savedTheme
                    : systemTheme;

                  root.dataset.theme = theme;
                  root.classList.toggle('dark', theme === 'dark');
                  root.style.colorScheme = theme;
                } catch {
                  root.dataset.theme = 'light';
                  root.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
