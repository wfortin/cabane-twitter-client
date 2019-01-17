import React, { SFC, MouseEventHandler } from 'react'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

import styles from './retweet.css'

const Retweet: SFC<{
  retweet_count: number
  retweeted?: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}> = ({ retweet_count, retweeted, onClick }) => (
  <div
    className={classnames(styles.retweet, {
      [styles.retweeted]: retweeted
    })}
    onClick={onClick}
  >
    <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
    {retweet_count}
  </div>
)

export default Retweet
