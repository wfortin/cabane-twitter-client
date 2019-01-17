import moment from 'moment'
import React, { Component } from 'react'

import Avatar from '../avatar/avatar'
import Retweet from '../retweet/retweet-hook'
import Favorite from '../favorite/favorite-hook'
import Media from '../media/media'
import * as API from '../../api/types'
import Moment from '../moment/moment'

import styles from './tweet.css'

export default class Tweet extends Component<API.Tweet, {}> {
  render() {
    const {
      user,
      full_text,
      retweet_count,
      favorite_count,
      entities,
      created_at
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
              <span className={styles.handle}>{user.screen_name}</span>
              <Moment
                date={created_at}
                render={({ formattedDate }) => (
                  <span className={styles.date}>{formattedDate}</span>
                )}
              />
            </div>
            <div className={styles.row}>{full_text}</div>
          </div>
        </div>
        <div className={styles.row}>
          <Media media={entities.media} />
        </div>
        <div className={styles.row}>
          <Retweet
            retweeted={this.props.retweeted}
            retweet_count={retweet_count}
          />
          <Favorite
            favorited={this.props.favorited}
            favorite_count={favorite_count}
          />
        </div>
      </div>
    )
  }
}
