import { Component } from 'react'

interface Props {
  initialValue: boolean
  render: (toggleValue: boolean, toggler: () => void) => JSX.Element
}

interface State {
  toggleValue: boolean
}

export default class Toggle extends Component<Props, State> {
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
