import '../globals.css';

export const metadata = {
  title: 'The BLOG',
  description: 'BLOG App With Next.JS & Sanity CMS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
};