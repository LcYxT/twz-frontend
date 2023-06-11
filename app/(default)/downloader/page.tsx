import React from 'react'
import { getStaticFileList } from '../../../utils/api'
import { FileList, Header, UrlDownloader } from '../../../components'
import styles from './page.module.scss'

export const revalidate = 0

async function Home() {
  const fileList = await getStaticFileList()

  return (
    <>
      <Header title="Downloader" />
      <div className={styles["container-wrap"]}>
        <div className={styles.container}>
          <UrlDownloader />
          <FileList fileList={fileList} />
        </div>
      </div>
    </>
  )
}

export default Home