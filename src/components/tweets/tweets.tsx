import React, { SFC } from 'react'

import Tweet from '../tweet/tweet'
import * as API from '../../api/types'

import styles from './tweets.css'

type TweetsProps = {
  tweets: API.Tweet[]
}

const Tweets: SFC<TweetsProps> = ({ tweets }) => (
  <div className={styles.tweets}>
    {tweets.map(tweet => (
      <Tweet key={tweet.id} {...tweet} />
    ))}
  </div>
)

export default Tweets
