import React from 'react'
import PropTypes from 'prop-types'

import styles from './avatar.css'

const Avatar = ({ name, profile_image_url_https }) => (
  <img
    className={styles.avatar}
    src={profile_image_url_https.replace('_normal.jpg', '.jpg')}
    alt={`${name}'s profile picture`}
  />
)

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  profile_image_url_https: PropTypes.string.isRequired
}

export default Avatar
