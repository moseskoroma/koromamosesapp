import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Providers } from './components/Providers'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moses Koroma Portfolio App',
  description: 'Portfio App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-slate-800 dark:text-white selection:bg-gray-500 dark:selection:bg-gray-800`}>
        <Providers>
        <Navbar/>
        <main className='  max-w-5xl mx-auto px-4 sm:px-6 lg:px-3 py-4'>
        {children}
        </main>
        <Footer/>
        </Providers>
        <Toaster position='top-right'/>
        </body>
    </html>
  )
}
