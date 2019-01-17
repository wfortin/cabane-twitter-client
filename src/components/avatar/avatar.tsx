import React from 'react'

import styles from './avatar.css'

type AvatarProps = {
  name: string
  profile_image_url_https: string
}

const Avatar: React.SFC<AvatarProps> = ({ name, profile_image_url_https }) => (
  <img
    className={styles.avatar}
    src={profile_image_url_https.replace('_normal.jpg', '.jpg')}
    alt={`${name}'s profile picture`}
  />
)

export default Avatar
