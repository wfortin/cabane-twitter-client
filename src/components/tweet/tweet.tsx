import moment from 'moment'
import React, { Component } from 'react'

import Avatar from '../avatar/avatar'
import Retweet from '../retweet/retweet'
import Favorite from '../favorite/favorite'
import Media from '../media/media'
import * as API from '../../api/types'

import styles from './tweet.css'

export default class Tweet extends Component<API.Tweet, {}> {
  formatDate = () =>
    moment(this.props.created_at, 'ddd MMM DD HH:mm:ss ZZ YYYY').format('LL')

  render() {
    const {
      user,
      full_text,
      retweet_count,
      favorite_count,
      entities
    } = this.props

    return (
      <div className={styles.tweet}>
        <div className={styles.row}>
          <Avatar
            name={user.name}
            profile_image_url_https={user.profile_image_url_https}
          />
          <div className={styles.col}>
            <div className={styles.row}>
              <span className={styles.name}>{user.name}</span>
              <span className={styles.handle}>{user.screen_name}</span>!
              <span className={styles.date}>{this.formatDate()}</span>
            </div>
            <div className={styles.row}>{full_text}</div>
          </div>
        </div>
        <div className={styles.row}>
          <Media media={entities.media} />
        </div>
        <div className={styles.row}>
          <Retweet retweet_count={retweet_count} />
          <Favorite favorite_count={favorite_count} />
        </div>
      </div>
    )
  }
}
