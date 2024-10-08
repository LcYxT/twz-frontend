'use client'
import React, { useEffect, useState } from "react";
import styles from './SplashScreen.module.scss'
import classNames from "classnames";


export const SplashScreen: React.FC = () => {
  const [state, setState] = useState<'hydrating' | 'hydrated' | ''>('')

  useEffect(() => {
    setTimeout(() => {
      setState("hydrating")
      setTimeout(() => setState("hydrated"), 300)
    }, 300)
  }, [])

  return (
    <div className={classNames(styles.splash, styles[state])}>
      <svg className={styles["splash-icon"]} width="299" height="85" viewBox="0 0 299 85" xmlns="http://www.w3.org/2000/svg">
        <path className={styles.icon} fillRule="evenodd" clipRule="evenodd" d="M0 6.96969C0 3.12044 3.12044 0 6.96969 0C10.8189 0 13.9394 3.12044 13.9394 6.96969V59.7942C13.9394 63.6434 10.8189 66.7639 6.96969 66.7639C3.12044 66.7639 0 63.6434 0 59.7942V6.96969ZM31.3635 24.5392C31.3635 20.6899 34.484 17.5695 38.3332 17.5695C42.1825 17.5695 45.3029 20.6899 45.3029 24.5392V77.3636C45.3029 81.2129 42.1825 84.3333 38.3332 84.3333C34.484 84.3333 31.3635 81.2129 31.3635 77.3636V24.5392ZM69.697 0C65.8477 0 62.7273 3.12044 62.7273 6.9697V59.7942C62.7273 63.6434 65.8477 66.7639 69.697 66.7639C73.5462 66.7639 76.6667 63.6434 76.6667 59.7942V6.96969C76.6667 3.12044 73.5462 0 69.697 0Z" fill="white"></path>
        <path className={styles.i1} d="M132.667 21.4026H140.497V62.9306H132.667V21.4026Z" fill="white"></path>
        <path className={styles.z} d="M146.497 55.0426L167.551 28.8267H147.425V21.4026H176.657V29.2906L155.835 55.5066H176.889V62.9306H146.497V55.0426Z" fill="white"></path>
        <path className={styles.f} d="M182.889 21.4026H209.221V28.8267H190.719V38.9186H207.365V46.3426H190.719V62.9306H182.889V21.4026Z" fill="white"></path>
        <path className={styles.l} d="M215.221 21.4026H223.051V55.5066H240.625V62.9306H215.221V21.4026Z" fill="white"></path>
        <path className={styles.i2} d="M246.625 21.4026H254.455V62.9306H246.625V21.4026Z" fill="white"></path>
        <path className={styles.x} d="M274.085 41.2386L261.499 21.4026H271.185L279.247 34.9746H279.711L287.773 21.4026H297.459L284.873 41.2386L298.503 62.9306H288.759L279.711 47.9667H279.247L270.199 62.9306H260.455L274.085 41.2386Z" fill="white"></path>
      </svg>
    </div>
  )
}
