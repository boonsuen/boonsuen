import type { Metadata } from 'next';
import '@/app/globals.css';
import { editorialNew, inter } from '@/config/font';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Boonsuen Oh',
  description:
    'Web Engineer skilled in web development, user interface, and creative problem-solving. Embracing details, fostering innovation, and delivering excellence collaboratively.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          editorialNew.variable,
          'font-sans antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
