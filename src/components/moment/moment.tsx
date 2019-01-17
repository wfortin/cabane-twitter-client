import { Component } from 'react'
import moment from 'moment'

type Props = {
  format?: string
  inputFormat?: string
  date: string
  render: (props: { formattedDate: string }) => JSX.Element
}

export default class Moment extends Component<Props, {}> {
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
