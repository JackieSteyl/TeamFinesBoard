/*
 * Dependencies
 */
// import react
import React, { Component } from 'react';
// import connect
import { connect } from 'react-redux';
// actions
import { toggleUserSignIn } from '../../actions';
// import API
import API from '../../api/Api';
/*
 * View components
 */
// import Button
import Button from '../../components/Button/Button';
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
    onClick: () => {
      let username = document.getElementById('username').value,
        password = document.getElementById('password').value,
        getUsers = API.getUsers(username.toUpperCase(), password);
      getUsers.once('value', (snapshot) => {
        let users = snapshot.val(),
          valid = [];
        for (var i = 0; i < users.length; i++) {
          if (users[i].username.toLowerCase() === username && users[i].password === password) {
            valid.push(users[i]);
          }
        }
        if (valid.length > 0) {
          dispatch(toggleUserSignIn(valid))
        }
        else {
          alert("Wrong username or password");
        }
      });
    }
  }
}
/*
 * initialise the Login
 * this exstends everything in the view/pageView
 *
 * @const Login
 */
class Login extends Component {
  render() {
    return (
      <div className='login-container'>
        <div className='row'>
          <div className='col-xs-12 text-center login-header'>
            <h3>{this.props.core.lang.company}</h3>
          </div>
        </div>
        <div className='login-card'>
          <div className='row'>
            <div className='col-xs-12 text-right icon'>
              <i className='fa fa-lock'></i>
            </div>
            <Form formOptions={[{
                'input': 'default',
                'type': 'text',
                'text': this.props.core.lang.username,
                'id': 'username',
                'className': 'form-control',
                'placeholder': ''
              },
              {
                'input': 'default',
                'type': 'password',
                'text': this.props.core.lang.password,
                'id': 'password',
                'className': 'form-control',
                'placeholder': ''
              }
              // {
              //   'input': 'button',
              //   'type': 'submit',
              //   'text': this.props.core.lang.signIn,
              //   'className': 'btn',
              //   'iconPosition': 'right',
              //   'iconClass': 'fa fa-sign-in right',
              //   'onClick' : this.props.onClick,
              //   'id': this.props.core.lang.signIn
              // }


            ]} onSubmit={this.props.onClick} />
          </div>
          <div className='row'>
            <div className='col-xs-12 text-right'>
              <div className='login-footer'>
                <Button buttonOptions={{
                  'text': this.props.core.lang.signIn,
                  'className': 'btn',
                  'iconPosition': 'right',
                  'iconClass': 'fa fa-sign-in right',
                  'onClick' : this.props.onClick,
                  'id': this.props.core.lang.signIn
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
