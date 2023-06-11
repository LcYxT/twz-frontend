'use client';

import { useEffect, useState } from 'react'
import { getDownloadingList, postDownloadUrl } from '../../utils'
import styles from './urlDownloader.module.scss'

interface Props {
  onDownloaded?: () => void
  onError?: (e: any) => void
}

function isValidYouTubeUrl(url: string): boolean {
  const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
  return youtubeUrlPattern.test(url)
}

function isValidUrl(url: string): boolean {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/
  if (!isValidYouTubeUrl(url)) return false
  return urlPattern.test(url)
}

export function UrlDownloader({ onDownloaded, onError }: Props) {
  const [url, setUrl] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    if (!isDownloading) return
    const periodicRun = setInterval(async () => {
      const downloadingList = await getDownloadingList()
      if (!downloadingList.includes(url)) {
        setIsDownloading(false)
        onDownloaded ? onDownloaded() : null
      }
    }, 5000)

    return () => {
      clearInterval(periodicRun)
    }
  }, [isDownloading])

  return (
    <div className={styles.container}>
      <input className={styles.url} value={url} onChange={(e) => setUrl(e.target.value)} placeholder="YouTube影片網址" />
      <button
        className={styles.btn}
        type="button"
        onClick={async () => {
          try {
            setIsDownloading(true)
            await postDownloadUrl(url)
          } catch (e) {
            onError ? onError(e) : null
          }
        }}
        disabled={isDownloading || !isValidUrl(url)}
      >
        {isDownloading ? '下載中...' : !isValidUrl(url) ? '請輸入有效網址' : '下載到伺服器'}
      </button>
    </div>
  )
}
