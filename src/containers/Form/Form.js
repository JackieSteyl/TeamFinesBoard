/*
 * Dependencies
 */
// import react
import React, { Component } from 'react';
// import connect
import { connect } from 'react-redux';
/*
 * Dum Component
 */
// import Input
import Input from '../../components/Input/Input';
// import Select
import Select from '../../components/Select/Select';
// import Textarea
import Textarea from '../../components/Textarea/Textarea';
// import button
import Button from '../../components/Button/Button';
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
  // TODO: Form state actions/dispatch to be placed here
  return {}
}
/*
 * initialise the Form
 * this exstends everything in the view/pageView
 *
 * @const Form
 */
class Form extends Component {
  /*
   * Gets the form fields and renders them
   *
   * @method getField
   * @param {Object} aItem The object item in the array
   * @param {Integer} aIndex The index position of the array
   */
  getField(aItem, aIndex) {
    switch (aItem.input) {
      case 'select':
        return <Select inputOptions={aItem} />
      case 'textarea':
        return <Textarea inputOptions={aItem} />
      case 'button':
        return <Button buttonOptions={aItem} />
      default:
        return <Input inputOptions={aItem} />
    }
  }
  render() {
    return (
      <div className='form-container'>
        <form>
          {this.props.formOptions.map((item, index) => {
            return (
              <div key={index}>
                {this.getField(item)}
              </div>
            )
          })}
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
