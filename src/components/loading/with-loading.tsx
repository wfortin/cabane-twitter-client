import React from 'react'
import { Loading } from './loading'

const withLoading = <P extends { [key: string]: any }>(
  Component: React.ComponentType<P>,
  { waitFor }: { waitFor: string }
) =>
  class extends React.Component<P> {
    render() {
      if (this.props[waitFor] && this.props[waitFor].length > 0) {
        return <Component {...this.props} />
      }
      return <Loading />
    }
  }

export default withLoading
