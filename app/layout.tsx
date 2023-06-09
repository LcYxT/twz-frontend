import './globals.css'
import styles from './layout.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Video Downloader',
  description: 'Web Video Downloader for web video downloading.',
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
          <ul className={styles["navbar-links"]}>
            <li className={styles["navbar-link"]}><a href="/"><img src="/home.svg" /></a></li>
            <li className={styles["navbar-link"]}><a href="/video-downloader"><img src="/download.png" /></a></li>
          </ul>
        </nav>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  )
}
