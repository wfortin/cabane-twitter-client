import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

import styles from './retweet.css'

const Retweet = ({ retweet_count, retweeted, onClick }) => (
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

Retweet.propTypes = {
  retweet_count: PropTypes.number,
  retweeted: PropTypes.bool,
  onClick: PropTypes.func
}

export default Retweet
