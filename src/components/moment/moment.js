import { Component, ComponentClass } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default class Moment extends Component {
  static propTypes = {
    format: PropTypes.string,
    inputFormat: PropTypes.string,
    date: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  }

  static defaultProps = {
    format: 'LL',
    inputFormat: 'ddd MMM DD HH:mm:ss ZZ YYYY'
  }

  render() {
    const { render, date, inputFormat, format } = this.props

    return render({
      formattedDate: moment(date, inputFormat).format(format)
    })
  }
}
