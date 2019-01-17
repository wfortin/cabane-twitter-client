import React, { SFC, MouseEventHandler } from 'react'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

import { useToggle } from '../toggle/toggle-hook'

import styles from './retweet.css'

const Retweet: SFC<{
  retweet_count: number
  retweeted: boolean
}> = ({ retweet_count, ...props }) => {
  const [retweeted, toggleRetweet] = useToggle(props.retweeted)

  return (
    <div
      className={classnames(styles.retweet, {
        [styles.retweeted]: retweeted
      })}
      onClick={toggleRetweet}
    >
      <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
      {retweeted ? retweet_count + 1 : retweet_count}
    </div>
  )
}

export default Retweet
