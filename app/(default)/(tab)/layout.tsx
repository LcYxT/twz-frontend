import '../../globals.css'
import styles from './layout.module.scss'
import Link from 'next/link'
import Image from 'next/image'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["navbar-links"]}>
          <Link className={styles["navbar-link"]} href="/"><Image src="/images/home.svg" width={24} height={24} alt="home"/></Link>
          <Link className={styles["navbar-link"]} href="/downloader"><Image src="/images/download.png" width={24} height={24} alt="downloader" /></Link>
        </div>
      </nav>
      <div className={styles.container}>{children}</div>
    </>
  )
}
