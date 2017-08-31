import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Toggle extends Component {
  static propTypes = {
    initialToggledOn: PropTypes.bool,
    onToggle: PropTypes.func,
    children: PropTypes.func.isRequired,
  }
  static defaultProps = {
    onToggle: () => {},
  }
  state = {
    toggledOn: this.props.initialToggledOn || false,
  }

  handleToggleClick = () => {
    const toggledOn = !this.state.toggledOn
    this.props.onToggle(toggledOn)
    this.setState({toggledOn})
  }

  getTogglerProps = (props = {}) => ({
    ...props,
    onClick: composeEventHandlers(props.onClick, this.handleToggleClick),
  })

  render() {
    const {children} = this.props
    const {toggledOn} = this.state
    return children({
      on: toggledOn,
      getTogglerProps: this.getTogglerProps,
    })
  }
}

function composeEventHandlers(...fns) {
  return (event, ...args) =>
    fns.some(fn => {
      fn && fn(event, ...args)
      return event.defaultPrevented
    })
}

export default Toggle
