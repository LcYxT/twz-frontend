import React from 'react'
import styles from './page.module.scss'

function Page() {
  return (<>
    <div className={styles["container-wrap"]} aria-controls=''>
      <video height="100%" width='100%' controls><source src="https://www.googleapis.com/drive/v3/files/1I745TlKjoRW0tOFuvwI-26K3STKl0rwJ?key=***REMOVED***&alt=media" /></video>
    </div>
  </>
  )
}

export default Page
