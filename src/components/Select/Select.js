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
  // TODO: Select state actions/dispatch to be placed here
  return {}
}
/*
 * initialise the Select
 * this exstends everything in the view/pageView
 *
 * @const Select
 */
class Select extends Component {
  getDefaultValue() {
    let value;
    for (var i = 0; i < this.props.inputOptions.options.length; i++) {
      if (this.props.inputOptions.selectedValue === this.props.inputOptions.options[i]) {
        value = this.props.inputOptions.options[i]
      }
    }
    return value;
  }
  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.inputOptions.text}>
          {this.props.inputOptions.text}
        </label>
        <select id={this.props.inputOptions.id} className='form-control'
          disabled={this.props.inputOptions.disabled}
            onChange={this.props.inputOptions.onChange}
              defaultValue={this.getDefaultValue()}>
          {this.props.inputOptions.options.map((item, index) => {
            return (
              <option key={index} value={item.username}>{item.username}</option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)
