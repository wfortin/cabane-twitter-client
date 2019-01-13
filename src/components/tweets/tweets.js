import React from 'react'
import PropTypes from 'prop-types'

import Tweet from '../tweet/tweet'
import styles from './tweets.css'

const Tweets = ({ tweets }) => (
  <div className={styles.tweets}>
    {tweets.map(tweet => (
      <Tweet key={tweet.id} {...tweet} />
    ))}
  </div>
)

Tweets.propTypes = {
  tweets: PropTypes.array
}

export default Tweets
