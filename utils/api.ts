import axios from 'axios'
import { FileInfo } from './type'

export const BackendUrl = 'https://twz.tw/api'

export async function getStaticFileList() {
  try {
    const response = await axios.get<FileInfo[]>(`${BackendUrl}/file/list`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function downloadFile(fileName: string) {
  try {
    const response = await axios.get<string>(`${BackendUrl}/download/${fileName}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function postDownloadUrl(url: string) {
  try {
    const response = await axios.post(`${BackendUrl}/server-download`, { url })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getDownloadingList() {
  try {
    const response = await axios.get<String[]>(`${BackendUrl}/downloading-list`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
