import './globals.css';

export const metadata = {
  title: 'Blog App Sanity CMS',
  description: 'Create Blog App With Next.JS & Sanity CMS',
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