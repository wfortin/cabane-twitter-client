import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

import { useToggle } from '../toggle/toggle-hook'

import styles from './retweet.css'

const Retweet = ({ retweet_count, ...props }) => {
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

Retweet.propTypes = {
  retweet_count: PropTypes.number,
  retweeted: PropTypes.bool
}

export default Retweet
