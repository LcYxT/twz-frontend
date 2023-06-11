import { FileInfo } from '../../utils'
import style from './fileList.module.scss'

interface Props {
  fileList: FileInfo[];
}

function FileListItem({ file }: { file: FileInfo }) {
  return (
    <li className={style['file-item']}>
      <div className={style['file-details']}>
        <h3 className={style['file-title']}>{file.name}</h3>
        <ul className={style['file-download']}>
          <li key={`${file.name}-${file.size}`}>
            <span className={style['file-downloaded-time']}>{`下載完成時間: ${file.modified_time}`}</span>
            <span>{`檔案大小: ${file.size}`}</span>
            <a
              href={file.link}
              download={file.name}
            >
              下載
            </a>
          </li>
        </ul>
      </div>
    </li>
  )
}

export function FileList({ fileList }: Props) {
  return (
    <ul className={style['file-list']}>
      {fileList.length > 0 ? fileList.sort((a, b) => b.modified_time.localeCompare(a.modified_time)).map((file) => (
        <FileListItem key={file.name} file={file} />
      )) : 'No file'}
    </ul>
  )
}


