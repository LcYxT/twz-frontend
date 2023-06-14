import { Metadata } from 'next'
import '../globals.css'
import styles from './layout.module.scss'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { SplashScreen } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TWZFLIX',
  description: 'Fansub video sharing website by twz',
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SplashScreen />
        <nav className={styles.navbar}>
          <div className={styles["navbar-links"]}>
            <Link className={styles["navbar-link"]} href="/"><img src="/images/home.svg" /></Link>
            <Link className={styles["navbar-link"]} href="/downloader"><img src="/images/download.png" /></Link>
          </div>
        </nav>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  )
}
