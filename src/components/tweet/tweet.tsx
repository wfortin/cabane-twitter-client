import moment from 'moment'
import React, { Component } from 'react'

import Avatar from '../avatar/avatar'
import Retweet from '../retweet/retweet-render-prop'
import Favorite from '../favorite/favorite-render-prop'
import Media from '../media/media'
import * as API from '../../api/types'
import Moment from '../moment/moment'
import Toggle from '../toggle/toggle-render-prop'

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
          <Toggle
            initialValue={this.props.retweeted}
            render={(retweeted, toggleRetweet) => (
              <Retweet
                retweeted={retweeted}
                retweet_count={retweeted ? retweet_count + 1 : retweet_count}
                onClick={toggleRetweet}
              />
            )}
          />
          <Toggle
            initialValue={this.props.favorited}
            render={(favorited, toggleFavorite) => (
              <Favorite
                favorited={favorited}
                favorite_count={favorited ? favorite_count + 1 : favorite_count}
                onClick={toggleFavorite}
              />
            )}
          />
        </div>
      </div>
    )
  }
}
