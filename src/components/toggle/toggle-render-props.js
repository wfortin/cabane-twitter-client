import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends Component {
  static propTypes = {
    initialValue: PropTypes.bool,
    render: PropTypes.func.isRequired
  }

  state = {
    toggleValue: this.props.initialValue
  }

  toggler = () => {
    this.setState(({ toggleValue }) => ({
      toggleValue: !toggleValue
    }))
  }

  render() {
    return this.props.render(this.state.toggleValue, this.toggler)
  }
}
