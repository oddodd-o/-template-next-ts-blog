import type { Metadata } from 'next';
import './globals.css';
import {AuthProvider} from "@/lib/firebase/auth";
import Header from "@/components/layout/header/Header";

export const metadata: Metadata = {
  title: 'next.js template',
  description: '페이지 설명',
  openGraph: {
    title: '페이지 제목',
    description: '페이지 설명',
    type: 'website',
    url: 'http://www.mysite.com/article/article1.html',
    images: [
      {
        url: 'http://www.mysite.com/article/article1_featured_image.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '페이지 제목',
    description: '페이지 설명',
    images: ['http://www.mysite.com/article/article1.html'],
    creator: '사이트 명',
  },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            <body>
                <AuthProvider>
                    <Header />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
