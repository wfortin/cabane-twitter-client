import React from 'react'
import { Loading } from './loading'

const withLoading = (Component, { waitFor }) =>
  class HOC extends React.Component {
    render() {
      if (this.props[waitFor] && this.props[waitFor].length > 0) {
        return <Component {...this.props} />
      }
      return <Loading />
    }
  }

export default withLoading
