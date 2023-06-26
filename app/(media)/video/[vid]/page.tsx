import React from 'react'
import { Header } from '@/components'
import { getVideoInfo } from '@/utils'

async function VideoPage({ params }: {params: {vid: string}}) {
  const videoInfo = await getVideoInfo(params.vid)
  if (!videoInfo) {
    return null
  }
  const videoUrl = `https://twz.tw/api/video?vid=${params.vid}`
  return (<>
    <Header title="Video" />
    <video width='100%' controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
    <div>{videoInfo.date}</div>
    <div>{videoInfo.description}</div>
    <div>{videoInfo.title}</div>
    <div>{videoInfo.likes}</div>
    <div>{videoInfo.views}</div>
    <div>{videoInfo.category}</div>
  </>
  )
}

export default VideoPage
