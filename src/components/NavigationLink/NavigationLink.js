/*
 * Dependencies
 */
// import react
import React, { Component } from 'react';
// import react router dom
import { Link } from 'react-router-dom';
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
  // TODO: NavigationLink state actions/dispatch to be placed here
  return {}
}
/*
 * initialise the NavigationLink
 * this exstends everything in the view/pageView
 *
 * @const NavigationLink
 */
class NavigationLink extends Component {
  render() {
    // TODO: Actions to be inserted for validation and submitting
    return (
        <Link to={this.props.buttonOptions.link}
          className={this.props.buttonOptions.className}
            title={this.props.buttonOptions.title}>
          {this.props.buttonOptions.iconPosition === 'left' ?
          <i className={this.props.buttonOptions.iconClass}></i> : ''}
            {this.props.buttonOptions.text}
          {this.props.buttonOptions.iconPosition === 'right' ?
            <i className={this.props.buttonOptions.iconClass}></i> : ''}
        </Link>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLink)
