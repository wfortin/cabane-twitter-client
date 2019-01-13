import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'

import styles from './favorite.css'

const Favorite = ({ favorite_count }) => (
  <div className={styles.favorite}>
    {favorite_count ? (
      <FontAwesomeIcon className={styles.icon} icon={heartSolid} />
    ) : (
      <FontAwesomeIcon className={styles.icon} icon={heartEmpty} />
    )}{' '}
    {favorite_count}
  </div>
)

Favorite.propTypes = {
  favorite_count: PropTypes.number
}

export default Favorite
