import React, { Component } from 'react'

import { getTimeline } from '../api/tweets'
import styles from './app.css'

class App extends Component {
  state = {
    fetching: true,
    tweets: []
  }

  async componentDidMount() {
    const { data } = await getTimeline()
    this.setState({ tweets: data, fetching: false })
  }

  render() {
    const { fetching, tweets } = this.state
    if (fetching) {
      return <div>LOADING...</div>
    }

    return tweets.map(({ id, full_text }) => (
      <div key={id} className={styles.tweet}>
        {full_text}
      </div>
    ))
  }
}

export default App
