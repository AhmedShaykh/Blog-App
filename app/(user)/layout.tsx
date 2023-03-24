import Header from '@/Components/Header';
import Banner from '@/Components/Banner';
import '../globals.css';

export const metadata = {
  title: "AHMËD BLOG'S",
  description: "AHMËD BLOG'S App With Next.JS & Sanity CMS"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
};