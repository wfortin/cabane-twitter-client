import React, { Component } from 'react'

import { getTimeline } from '../api/tweets'
import Tweets from './tweets/tweets'
import { Loading } from './loading/loading'

type AppState = {
  fetching: boolean
  tweets: any[]
}

class App extends Component<{}, AppState> {
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
      return <Loading />
    }
    return <Tweets tweets={tweets} />
  }
}
export default App
