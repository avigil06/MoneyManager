import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  static propTypes = {
    mode: PropTypes.oneOf(['default', 'disabled', 'error']),
  }

  static defaultProps = {
    mode: 'default',
  }

  render() {
    return (
      <button className={`Button ${this.props.mode}`}>{this.props.children}</button>
    )
  }

}

export default Button
