import { Metadata } from 'next';
import './globals.css';
import App from './app';
import { PublicEnvScript } from 'next-runtime-env';

export const metadata: Metadata = {
  title: 'WWA - CRM Portal',
  description: 'WorldWide Auctioneers CRM Portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <PublicEnvScript />
        <meta name='apple-mobile-web-app-title' content='WWA' />
      </head>
      <body className={`antialiased`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
