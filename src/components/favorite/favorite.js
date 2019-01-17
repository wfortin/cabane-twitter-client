import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'

import styles from './favorite.css'

export default class Favorite extends Component {
  static propTypes = {
    favorite_count: PropTypes.number,
    favorited: PropTypes.bool
  }

  state = {
    favorited: this.props.favorited
  }

  toggle = () => {
    this.setState(({ favorited }) => ({
      favorited: !favorited
    }))
  }

  render() {
    const { favorite_count } = this.props
    const { favorited } = this.state

    return (
      <div
        className={classnames(styles.favorite, {
          [styles.favorited]: favorited
        })}
        onClick={this.toggle}
      >
        {favorite_count ? (
          <FontAwesomeIcon
            className={classnames(styles.icon, {
              [styles.favorited]: favorited
            })}
            icon={heartSolid}
          />
        ) : (
          <FontAwesomeIcon
            className={classnames(styles.icon, {
              [styles.favorited]: favorited
            })}
            icon={heartEmpty}
          />
        )}{' '}
        {favorited ? favorite_count + 1 : favorite_count}
      </div>
    )
  }
}
