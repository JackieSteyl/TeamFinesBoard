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
  // TODO: Textarea state actions/dispatch to be placed here
  return {}
}
/*
 * initialise the Textarea
 * this exstends everything in the view/pageView
 *
 * @const Textarea
 */
class Textarea extends Component {
  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.inputOptions.id}>
          {this.props.inputOptions.text}
        </label>
        <textarea type={this.props.inputOptions.type}
          className={this.props.inputOptions.className}
            id={this.props.inputOptions.id}
              placeholder={this.props.inputOptions.placeholder}
                disabled={this.props.inputOptions.disabled}
                  rows={this.props.inputOptions.rows}
                    cols={this.props.inputOptions.cols}
                      maxlength={this.props.inputOptions.maxlength}
                        readOnly={this.props.inputOptions.readonly}>
        </textarea>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Textarea)
