import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import ThemeSwitch from '@/components/ThemeSwitch'
import { Toaster } from '@/components/ui/toaster'
import ThemeContextProvider from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nihad | Personal Portfolio',
  description: 'FrontEnd Developer with 2 years of experience',
  icons: {
    icon: '/favicon-32x32.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#926343]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header/>
              {children}
              <Toaster/>
            </ActiveSectionContextProvider>
    
            <ThemeSwitch/>
          </ThemeContextProvider>
      </body>
    </html>
  )
}
