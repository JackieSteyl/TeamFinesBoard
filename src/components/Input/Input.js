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
  // TODO: Input state actions/dispatch to be placed here
  return {}
}
/*
 * initialise the Input
 * this exstends everything in the view/pageView
 *
 * @const Input
 */
class Input extends Component {
  render() {
    // TODO: Actions to be inserted for validation and submitting
    return (
      <div className={this.props.inputOptions.mandatory ?
        'form-group mandatory' : 'form-group'}>
        <label htmlFor={this.props.inputOptions.id}>
          {this.props.inputOptions.mandatory ?
            <i className='fa fa-asterisk left'></i> : ''}
          {this.props.inputOptions.text}
        </label>
        <input type={this.props.inputOptions.type}
          className={this.props.inputOptions.className}
            id={this.props.inputOptions.id}
              placeholder={this.props.inputOptions.placeholder}
                disabled={this.props.inputOptions.disabled}
                  readOnly={this.props.inputOptions.readonly}
                    onClick={this.props.inputOptions.onClick} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
