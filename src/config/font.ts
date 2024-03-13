import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const editorialNew = localFont({
  src: [
    {
      path: '../fonts/PPEditorialNew-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPEditorialNew-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-editorial-new',
});

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
