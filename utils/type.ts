export interface FileInfo {
  name: string
  size: string
  link: string
  modified_time: string
}

export interface DownloadInfo {
  size: string,
  resolution: string,
  link: string
}

export enum Category {
  GIDLE = 'gidle',
  LESSERAFIM = 'lesserafim'
}

export interface VideoInfo {
    vid: string
    title: string
    description: string
    date: string
    category: Category
    likes: number
    views: number
}