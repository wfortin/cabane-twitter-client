import React from 'react'
import cn from 'classnames'

import styles from './loading.css'

export const Loading = () => (
  <div className={styles.wrapper}>
    <div className={styles.skFoldingCube}>
      <div className={cn(styles.skCube1, styles.skCube)} />
      <div className={cn(styles.skCube2, styles.skCube)} />
      <div className={cn(styles.skCube4, styles.skCube)} />
      <div className={cn(styles.skCube3, styles.skCube)} />
    </div>
  </div>
)
