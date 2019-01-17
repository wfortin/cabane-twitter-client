import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'

import styles from './favorite.css'

const Favorite = ({ favorite_count, favorited, onClick }) => (
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

Favorite.propTypes = {
  favorite_count: PropTypes.number,
  favorited: PropTypes.bool,
  onClick: PropTypes.func
}

export default Favorite
