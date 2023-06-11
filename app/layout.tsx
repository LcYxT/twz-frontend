import './globals.css'
import styles from './layout.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'twzflix',
  description: 'Fansub video sharing website by twz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navbar}>
          {/* <div className={styles["navbar-brand"]}>Logo</div> */}
          <div className={styles["navbar-links"]}>
            <a className={styles["navbar-link"]} href="/"><img src="/home.svg" /></a>
            <a href="/video-downloader" className={styles["navbar-link"]}><img src="/download.png" /></a>
          </div>
        </nav>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  )
}
