import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'LIK Match Checker | Made by AI-1 Students',
  description: 'Enter two names and check your LIK relationship result. Friends, Love, Affection, Marriage, Enemy, or Siblings? Made by AI-1 Students.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 selection:bg-rose-200 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}
