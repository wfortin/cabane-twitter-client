import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

import styles from './retweet.css'

const Retweet = ({ retweet_count }) => (
  <div className={styles.retweet}>
    <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
    {retweet_count}
  </div>
)

Retweet.propTypes = {
  retweet_count: PropTypes.number
}

export default Retweet
