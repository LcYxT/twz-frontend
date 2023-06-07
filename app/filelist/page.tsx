import React from 'react'
import { getFileList } from '../../utils/api'
import { FileList } from '../../components'
import styles from './page.module.scss'

async function Home() {
  const fileList = await getFileList()

  return (
    <div className={styles.container}>
      {/* <UrlDownloader onDownloaded={() => console.log('hi')} /> */}
      {fileList
        ? <FileList fileList={fileList} />
        : <span>載入檔案清單中...</span>}
    </div>
  )
}

export default Home