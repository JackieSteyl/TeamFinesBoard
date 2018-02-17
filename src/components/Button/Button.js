/*
 * Dependencies
 */
// import react
import React, { Component } from 'react';
// import connect
import { connect } from 'react-redux';
/*
 * map state to propTypes
 *
 * @method mapStateToProps
 */
const mapStateToProps = (state, ownProps) => {
  return state
}
/*
 * map dispatch to props
 *
 * @method mapDispatchToProps
 */
const mapDispatchToProps = dispatch => {
  // TODO: Button state actions/dispatch to be placed here
  return {}
}
/*
 * initialise the Button
 * this exstends everything in the view/pageView
 *
 * @const Button
 */
class Button extends Component {
  render() {
    // TODO: Actions to be inserted for validation and submitting
    return (
        <a className={this.props.buttonOptions.className}
          onClick={this.props.buttonOptions.onClick}
            title={this.props.buttonOptions.title}
              type={this.props.buttonOptions.type}>
          {this.props.buttonOptions.iconPosition === 'left' ?
          <i className={this.props.buttonOptions.iconClass}></i> : ''}
            {this.props.buttonOptions.text}
          {this.props.buttonOptions.iconPosition === 'right' ?
            <i className={this.props.buttonOptions.iconClass}></i> : ''}
        </a>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
