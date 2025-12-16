import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pearapat Kumsing - Portfolio',
  description: 'Computer Engineering Student | Full-Stack Developer at KMITL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans text-gray-700">{children}</body>
    </html>
  )
}
