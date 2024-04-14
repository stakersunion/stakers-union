import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata = {
  title: 'Stakers Union',
  description: 'A collective of home-stakers for the Ethereum network',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
