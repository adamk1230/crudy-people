import { TitleBar } from '@/components/TitleBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CRUDy People',
  description: 'CRUD app for people',
};

const PAGE_TITLE = 'CRUDy People';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TitleBar title={PAGE_TITLE} />
        {children}
      </body>
    </html>
  );
}
