import React from "react"
import styles from "./page.module.scss"
import classNames from "classnames"
import Link from "next/link"

function Home() {
  return (
    <div className={styles["selection-container"]}>
      <div className={styles["category-container"]}>
        <div className={styles["category-list"]}>
          <h1 className={styles["selection-label"]}>觀賞誰的影片？</h1>
          <ul className={styles["choose-category"]}>
            <li className={styles.category}>
              <Link href="/lesserafim">
                <div className={classNames(styles["category-icon"], styles.lsrf)} />
                <span className={styles["category-name"]}>LE SSERAFIM</span>
              </Link>
            </li>
            <li className={styles.category}>
              <Link href="/gidle">
                <div className={classNames(styles["category-icon"], styles.gidle)} />
                <span className={styles["category-name"]}>(G)I-DLE</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
