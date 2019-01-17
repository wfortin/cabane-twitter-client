import React, { Component, MouseEventHandler, SFC } from 'react'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'

import styles from './favorite.css'

const Favorite: SFC<{
  favorite_count: number
  favorited: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}> = ({ favorite_count, favorited, onClick }) => (
  <div
    className={classnames(styles.favorite, {
      [styles.favorited]: favorited
    })}
    onClick={onClick}
  >
    {favorite_count ? (
      <FontAwesomeIcon className={styles.icon} icon={heartSolid} />
    ) : (
      <FontAwesomeIcon className={styles.icon} icon={heartEmpty} />
    )}{' '}
    {favorite_count}
  </div>
)

export default Favorite
