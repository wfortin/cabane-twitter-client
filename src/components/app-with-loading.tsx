import React, { Component } from 'react'

import { getTimeline } from '../api/tweets'
import Tweets from './tweets/tweets'
import withLoading from './loading/with-loading'

const TweetsLoader = withLoading(Tweets, { waitFor: 'tweets' })

class App extends Component {
  state = {
    tweets: []
  }

  async componentDidMount() {
    const { data } = await getTimeline()
    setTimeout(() => {
      this.setState({ tweets: data })
    }, 5000) // Add intentional timeout to see the loading.
  }

  render() {
    return <TweetsLoader tweets={this.state.tweets} />
  }
}

export default App
