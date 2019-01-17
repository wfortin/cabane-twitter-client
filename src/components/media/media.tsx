import React, { SFC } from 'react'

import * as API from '../../api/types'

import styles from './media.css'

const MediaItem: SFC<API.Medium> = ({
  type,
  media_url_https
}): JSX.Element | null => {
  if (type === 'video') {
    return null
  }
  return <img className={styles.image} src={media_url_https} alt="" />
}

const MediaList: SFC<{ media: API.Medium[] }> = ({ media }) => {
  if (!media) {
    return null
  }
  return (
    <div>
      {media.map(item => (
        <MediaItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default MediaList
