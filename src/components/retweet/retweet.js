import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

import styles from './retweet.css'

export default class Retweet extends Component {
  static propTypes = {
    retweet_count: PropTypes.number,
    retweeted: PropTypes.bool
  }

  state = {
    retweeted: this.props.retweeted
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
