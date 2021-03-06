import React, { Component, SFC } from 'react'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'

import { useToggle } from '../toggle/toggle-hook'

import styles from './favorite.css'

const Favorite: SFC<{
  favorite_count: number
  favorited: boolean
}> = ({ favorite_count, ...props }) => {
  const [favorited, toggleFavorite] = useToggle(props.favorited)

  return (
    <div
      className={classnames(styles.favorite, {
        [styles.favorited]: favorited
      })}
      onClick={toggleFavorite}
    >
      {favorite_count ? (
        <FontAwesomeIcon className={styles.icon} icon={heartSolid} />
      ) : (
        <FontAwesomeIcon className={styles.icon} icon={heartEmpty} />
      )}{' '}
      {favorited ? favorite_count + 1 : favorite_count}
    </div>
  )
}

export default Favorite
