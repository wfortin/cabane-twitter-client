import moment from 'moment'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Avatar from '../avatar/avatar'
// Regular
// import Retweet from '../retweet/retweet'
// import Favorite from '../favorite/favorite'

// RenderProps
// import Retweet from '../retweet/retweet-toggle1'
// import Favorite from '../favorite/favorite-toggle1'
// import Toggle from '../toggle/toggle-render-props'

// Hooks
import Retweet from '../retweet/retweet-toggle2'
import Favorite from '../favorite/favorite-toggle2'

import Media from '../media/media'
import Moment from '../moment/moment'

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
    retweeted: PropTypes.bool,
    favorite_count: PropTypes.number,
    favorited: PropTypes.bool
  }

  formatDate = () =>
    moment(this.props.created_at, 'ddd MMM DD HH:mm:ss ZZ YYYY').fromNow()

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
          {/* RenderProps */}
          {/* <Toggle
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
          /> */}
          {/* Regular or HOOK */}
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
