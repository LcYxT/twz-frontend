'use client';

import React, { useEffect, useState } from 'react'
import { FileInfo } from '../../utils'
import { getStaticFileList } from '../../utils/api'
import { FileList, Header, UrlDownloader } from '../../components'
import styles from './page.module.scss'

function Home() {
  const [fileList, setFileList] = useState<FileInfo[] | null>(null)

  const updateFileList = () => {
    const asyncRun = async () => {
      const result = await getStaticFileList()
      setFileList(result)
    }
    asyncRun()
  }

  useEffect(updateFileList, [])

  return (<>
    <Header title="Downloader" />
    <div className={styles["container-wrap"]}>
      <div className={styles.container}>
        <UrlDownloader onDownloaded={updateFileList} onError={(e) => { alert(e) }} />
        {fileList
          ? <FileList fileList={fileList} />
          : <span>載入檔案清單中...</span>}
      </div>
    </div>
  </>
  )
}

export default Home
