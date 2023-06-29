import React from 'react'
import styles from './page.module.scss'

function Page() {
  return (<>
    <div className={styles["container-wrap"]} aria-controls=''>
      <video height="100%" width='100%' controls><source src="https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/axnyhqee3ajk/b/bucket-20230609-2031/o/gidle%2Fwork_dol.mp4" /></video>
    </div>
  </>
  )
}

export default Page
