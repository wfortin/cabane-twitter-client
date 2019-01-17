import React, { Component } from 'react'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'

import styles from './favorite.css'

type Props = {
  favorite_count: number
  favorited?: boolean
}

type State = {
  favorited: boolean
}

export default class Favorite extends Component<Props, State> {
  state = {
    favorited: !!this.props.favorited
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
