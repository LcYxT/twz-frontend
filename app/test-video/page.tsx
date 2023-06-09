import React from 'react'
import styles from './page.module.scss'

function Page() {
  return (<>
    <div className={styles["container-wrap"]} aria-controls=''>
      <video height="100%" width='100%' controls><source src="https://objectstorage.ap-chuncheon-1.oraclecloud.com/p/2mjVr6KLCcpWo2zTPyY3fGqlJcWF8nVTheETf2Ziu-A4S5NFsDHQhiAxi1H7D0rc/n/axnyhqee3ajk/b/bucket-20230609-2031/o/1%EC%9D%B8%201%EB%8B%AD%20%ED%95%98%EC%A7%80..%EB%A7%88..%20%EC%B9%98%ED%82%A8%20%ED%8A%80%EA%B8%B0%EB%8B%A4%20%EB%85%B8%EB%9E%97%EA%B2%8C%20%EC%A7%80%EB%A0%A4%EB%B2%84%EB%A0%B8%EC%8A%B5%EB%8B%88%EB%8B%A4...%E3%85%A3%EC%B9%98%ED%82%A8%EC%A7%91%E3%85%A3%EC%9B%8C%ED%81%AC%EB%8F%8C%E3%85%A3%EC%8A%88%ED%99%94.mp4" /></video>
    </div>
  </>
  )
}

export default Page
