import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
}
