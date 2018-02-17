/*
 * Dependencies
 */
// import react
import React, { Component } from 'react';
// import connect
import { connect } from 'react-redux';
// jquery
import $ from 'jquery';
// import API
import API from '../../api/Api';
// import moment
import moment from 'moment';
// import MaterialDateTimePicker
import MaterialDateTimePicker from 'material-datetime-picker/dist/material-datetime-picker';
// import material datetimepicker css
import 'material-datetime-picker/dist/material-datetime-picker.css';
/*
 * View components
 */
// import Button
import Button from '../../components/Button/Button';
// import NavigationLink
import NavigationLink from '../../components/NavigationLink/NavigationLink';
/*
 * Views
 */
// import Form
import Form from '../Form/Form';
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
  return {
    onClick: (e) => {
      let reason = {
        date: $('#Date').val(),
        reason: $('#reason').val(),
        user: $('#user')[0].selectedIndex
      };
      API.addReason(reason);
      alert('Reason Added');
    },
    pickDate: (e) => {
      let id = e.target.id || e.target.closst('input').id;
      const input = document.querySelector('#' + id);
      const picker = new MaterialDateTimePicker({
        // DOM Element to attach the datepicker. This element will receive
        // events when the data changes. If an input element, will be
        // populated with formatted date and time chosen.
        // `el` must be a DOM Element object. Selectpr strings or wrappers
        // like a jQuery selection are not supported.
        el: input,
        // if `el` is set, the format used to display the datetime in the input,
        format: 'YYYY-MM-DD',
        //  the default value of the picker
        default: moment(),
        // the container to append the picker. If you change this, you need to make
        // sure your element has a z-index > 0 so that it displays in front of the scrim.
        container: document.body
        // dateValidator: null
      }).on('submit', (val) => {
        input.value = val.format('YYYY-MM-DD');
      }).on('cancel', () => {
        input.value = '';
      });
      picker.open();
    }
  }
}
/*
 * initialise the AddReason
 * this exstends everything in the view/pageView
 *
 * @const AddReason
 */
class AddReason extends Component {
  render() {
    return (
      <div className='add-container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h3>ADD FINE</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Form formOptions={[{
                'input': 'select',
                'options': this.props.core.config.users,
                'type': 'text',
                'text': 'Select user',
                'id': 'user',
                'className': 'form-control',
                'placeholder': ''
              },
              {
                'input': 'default',
                'type': 'text',
                'text': 'Date',
                'id': 'Date',
                'className': 'form-control',
                'placeholder': '',
                'onClick': this.props.pickDate
              },
              {
                'input': 'default',
                'type': 'text',
                'text': 'Reason',
                'id': 'reason',
                'className': 'form-control',
                'placeholder': ''
              }
            ]} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='col-xs-1'>
              <Button buttonOptions={{
                'text': 'Add',
                'className': 'btn',
                'iconPosition': 'right',
                'iconClass': 'fa fa-user right',
                'onClick' : this.props.onClick
              }} />
            </div>
            <div className='col-xs-1'>
              <NavigationLink buttonOptions={{
                'link': '/',
                'text': 'Back',
                'className': 'btn',
                'iconPosition': 'left',
                'iconClass': 'fa fa-chevron-left left',
              }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReason)
