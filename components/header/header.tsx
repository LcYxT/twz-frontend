import styles from "./header.module.scss"

export function Header({ title, icon }: { title: string; icon?: "lesserafim" | "gidle" }) {
  return (
    <header className={styles.header}>
      {icon && <span className={styles[`${icon}-icon`]} />}
      <h1>{title}</h1>
    </header>
  )
}
