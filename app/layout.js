import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { NextAuthProvider } from './provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InsightsNet_Web',
  description: 'Welcome to InsightsNet_Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
        <Header/>        
        {children}
        <Footer/>
        </NextAuthProvider>
      </body>
    </html>
  )
}
