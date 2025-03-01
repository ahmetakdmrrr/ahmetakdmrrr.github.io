import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmet - Web Developer Portfolio',
  description: 'Full Stack Web Developer Portfolio - Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-blue-500">Portfolio</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="#home" className="text-gray-300 hover:text-white text-lg px-3 py-2 rounded-md font-medium">Ana Sayfa</Link>
                  <Link href="#about" className="text-gray-300 hover:text-white text-lg px-3 py-2 rounded-md font-medium">Hakkımda</Link>
                  <Link href="#skills" className="text-gray-300 hover:text-white text-lg px-3 py-2 rounded-md font-medium">Yeteneklerim</Link>
                  <Link href="#projects" className="text-gray-300 hover:text-white text-lg px-3 py-2 rounded-md font-medium">Projeler</Link>
                  <Link href="#certifications" className="text-gray-300 hover:text-white text-lg px-3 py-2 rounded-md font-medium">Sertifikalarım</Link>
                  <Link href="#contact" className="text-gray-300 hover:text-white text-lg px-3 py-2 rounded-md font-medium">İletişim</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 