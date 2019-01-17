import React, { Component } from 'react'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

import styles from './retweet.css'

type RetweetProps = {
  retweet_count: number
  retweeted?: boolean
}

type RetweetState = {
  retweeted: boolean
}

export default class Retweet extends Component<RetweetProps, RetweetState> {
  state = {
    retweeted: !!this.props.retweeted
  }

  toggle = () => {
    this.setState(({ retweeted }) => ({
      retweeted: !retweeted
    }))
  }

  render() {
    const { retweet_count } = this.props
    const { retweeted } = this.state

    return (
      <div
        className={classnames(styles.retweet, {
          [styles.retweeted]: retweeted
        })}
        onClick={this.toggle}
      >
        <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
        {retweeted ? retweet_count + 1 : retweet_count}
      </div>
    )
  }
}
