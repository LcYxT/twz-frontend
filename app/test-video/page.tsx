import React from 'react'
import styles from './page.module.scss'

function Page() {
  return (<>
    <div className={styles["container-wrap"]} aria-controls=''>
      <video height="100%" width='100%' controls><source src="https://files.mybox.naver.com/file/download.api?auth=3&resourceKey=YWlkZW5rb3J8MzQ3MjUwMDYzMTM1NjA3NjM1M3xGfDU5Njk1OTg=&atoken=***REMOVED***&NdriveSvcType=NHN%2FND-WEB%20Ver&resourceType=vencode" /></video>
    </div>
  </>
  )
}

export default Page
