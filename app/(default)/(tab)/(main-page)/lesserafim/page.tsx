import React from "react"
import { Header } from "@/components"
import styles from "./page.module.scss"
import classNames from "classnames"

function LesserafimPage() {
  return (
    <>
      <Header title="LESSERAFIM" icon="lesserafim" />
      <div className={styles.container}>
        <div className={styles["row"]}>
          <div className={classNames(styles["column"], styles["video-preview"])}>preview video?</div>
          <div className={classNames(styles["column"], styles["join-fan-link"])}>JOIN FEARNOT ↘</div>
        </div>
        <div className={classNames(styles["row"], styles["second"])}>
          <div className={classNames(styles["column"], styles["block-3"])}>block 3</div>
          <div className={classNames(styles["column"], styles["block-4"])}>block 4</div>
        </div>
        <div className={classNames(styles["row"], styles["third"])}>
          <div className={classNames(styles["column"], styles["block-5"])}>block 5</div>
          <div className={classNames(styles["column"], styles["vsplit-block"])}>
            <div className={classNames(styles["column"], styles["block-6"])}>block 6</div>
            <div className={classNames(styles["column"], styles["block-7"])}>block 7</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LesserafimPage
