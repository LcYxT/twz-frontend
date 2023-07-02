"use client"

import styles from "./header.module.scss"
import Link from "next/link"
import Image from "next/image"
import classNames from "classnames"
import { useEffect, useRef, useState } from "react"

export function Header({ title, icon }: { title: string; icon?: "lesserafim" | "gidle" }) {
  const [isExpand, setIsExpand] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuIconRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Add event listener to detect clicks outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        menuIconRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setIsExpand(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className={styles.header}>
      <span className={styles.title}>
        {icon && <span className={styles[`${icon}-icon`]} />}
        <h1>{title}</h1>
      </span>
      <nav className={styles.navbar}>
        <div ref={dropdownRef} className={classNames(styles["navbar-links"], { [styles.expand]: isExpand })}>
          <Link className={styles["navbar-link"]} href="/">
            ABOUT
            {/* <Image src="/images/home.svg" width={24} height={24} alt="home" /> */}
          </Link>
          <Link className={styles["navbar-link"]} href="/">
            CONTENTS
            {/* <Image src="/images/download.png" width={24} height={24} alt="downloader" /> */}
          </Link>
          <Link className={styles["navbar-link"]} href="/">
            SOCIAL MEDIA
          </Link>
          <Link className={styles["navbar-link"]} href="/">
            MUSIC
          </Link>
        </div>
        <Image
          ref={menuIconRef}
          className={styles["menu-icon"]}
          src="/images/menu.svg"
          width={30}
          height={30}
          alt="menu"
          onClick={() => setIsExpand((e) => !e)}
        />
      </nav>
    </header>
  )
}
