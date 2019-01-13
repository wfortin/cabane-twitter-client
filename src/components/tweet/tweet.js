import moment from 'moment'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Avatar from '../avatar/avatar'
import Retweet from '../retweet/retweet'
import Favorite from '../favorite/favorite'
import Media from '../media/media'

import styles from './tweet.css'

export default class Tweet extends Component {
  static propTypes = {
    created_at: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      screen_name: PropTypes.string,
      profile_image_url_https: PropTypes.string
    }),
    full_text: PropTypes.string,
    entities: PropTypes.shape({
      media: PropTypes.array
    }),
    retweet_count: PropTypes.number,
    favorite_count: PropTypes.number
  }

  formatDate = () =>
    moment(this.props.created_at, 'ddd MMM DD HH:mm:ss ZZ YYYY').fromNow()

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
