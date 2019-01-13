import React from 'react'

import styles from './media.css'

const MediaItem = ({ type, media_url_https }) => {
  if (type === 'video') {
    return null
  }

  return <img className={styles.image} src={media_url_https} alt="" />
}

const MediaList = ({ media }) => {
  if (!media) {
    return null
  }

  return media.map(item => <MediaItem key={item.id} {...item} />)
}

export default MediaList
