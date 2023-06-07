'use client';

import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { FileInfo } from '../src/utils'
import { getFileList } from '../src/utils/api'
import { FileList, UrlDownloader } from '../src/components'
import styles from './page.module.scss'
import Head from 'next/head';

function Home() {
  const [fileList, setFileList] = useState<FileInfo[] | null>(null)

  const updateFileList = () => {
    const asyncRun = async () => {
      const result = await getFileList()
      setFileList(result)
    }
    asyncRun()
  }

  useEffect(updateFileList, [])

  return (<>
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
