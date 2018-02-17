/*
 * Dependencies
 */
// import react
import React, { Component } from 'react';
// import connect
import { connect } from 'react-redux';
// import moment
import moment from 'moment';
// import jquery
import $ from 'jquery';
// import API
import API from '../../api/Api';
// import actions
import { setUsers } from '../../actions';
// import NavigationLink
import NavigationLink from '../../components/NavigationLink/NavigationLink';
// import NavigationLink
import Button from '../../components/Button/Button';
/*
 * Views
 */
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
  // TODO: Home state actions/dispatch to be placed here
  return {
    setUsers: (users) => {
      dispatch(setUsers(users))
    },
    deleteFine: (e) => {
      e.preventDefault();
      let $target = $(e.target),
        $li = $target.closest('li'),
        userId = $li.attr('data-id'),
        fineId = $target.attr('data-id');
      API.deleteFine(userId, fineId);
    },
    resetFines: () => {
      API.resetFines();
    }
  }
}
/*
 * initialise the Home
 * this exstends everything in the view/pageView
 *
 * @const Home
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.showToolTip = this.showToolTip.bind(this);
    this.hideToolTip = this.hideToolTip.bind(this);
    this.showReasons = this.showReasons.bind(this);
  }
  componentDidMount() {
    let self = this;
    API.getUsers().on('value', (snapshot) => {
      let users = snapshot.val();
      for (var i = 0; i < users.length; i++) {
        if (!users[i].fine) {
          users[i].fine = [];
        }
      }
      self.props.setUsers(users);
    });
  }
  showToolTip(e) {
    let $target = e.target.getElementsByClassName('hide');
    if ($target.length > 0) {
      $target[0].classList.add('show');
      $target[0].classList.remove('hide');
    }
  }
  hideToolTip(e) {
    let $target = e.target.getElementsByClassName('show');
    if ($target.length > 0) {
      $target[0].classList.add('hide');
      $target[0].classList.remove('show');
    }
  }
  showReasons(e) {
    let $li = $(e.target).localName === 'li' ? $(e.target) : $(e.target).closest('li'),
      $reason = $li.find('.reasons'),
      $total = $li.find('.total');
    $reason.toggleClass('hide', !$reason.hasClass('hide'));
    $total.toggleClass('hide', !$total.hasClass('hide'));
  }
  getFineAmount(a) {
    switch (a) {
      case 1:
        return ' - R5'
      case 2:
        return ' - R15';
      case 3:
        return ' - R35';
      case 4:
        return ' - R75';
      case 5:
        return ' - R155';
      case 6:
        return ' - R315';
      case 7:
        return ' - R635';
      case 8:
        return ' - R1275';
      case 9:
        return ' - R2555';
      case 10:
        return ' - R5115';
      default:

    }
  }
  render() {
    return (
      <div className='home-container'>
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <h3>
              {this.props.core.lang.company}
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 list'>
            <ul>
              {this.props.core.config.users.map((item, index) => {
                return (
                  <li data-id={index} key={index} onClick={this.showReasons}>
                    <span className={item.fine.length > 0 ? 'fine' : ''}>
                      {item.username}
                      <span className='total hide'>
                        {this.getFineAmount(item.fine.length)}
                      </span>
                    </span>
                    <span className={item.fine.length > 0 ? 'pull-right fine' : 'pull-right'}>{item.fine.length}</span>
                    <div className='reasons hide'>
                      {item.fine.length > 0 ?
                        item.fine.map((items, index) => {
                          return (
                            <div key={index} className='reason-holder'>
                              <span className='num'>#{index} </span>
                              <span className='time'>{moment(items.date).format('Do MMM YYYY')}</span>
                              <br />
                              <span className='text'><small>{items.reason}</small></span>
                              {this.props.core.config.signedInUser.permission ?
                                <span className='pull-right'>
                                  <i data-id={index} className='fa fa-close' onClick={this.props.deleteFine}></i>
                                </span>
                                : ''
                              }
                            </div>
                          )
                        }) :
                        <div key={index} className='reason-holder'>
                          {this.props.core.lang.noFinesYet}
                        </div>
                      }
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <p className='text-left'>
              Rules: Fines will be added to team members who:
            </p>
            <ul className='text-left'>
              <li>
                  Arrive late for (ceremonies; standups; grooming etc)
              </li>
              <li>
                Any other reason deemed fit by the team
              </li>
            </ul>
            <br />
            <p className='text-left'>
              <small>
                After each Sprint-end fines will be handed out to those who incurred fines during the duration of each sprint.
                <br />
                When a team member receive X infridgements, they will be awarded a special fine
                With each new sprint, all team member will start at 0 again
              </small>
            </p>
          </div>
            {this.props.core.config.signedInUser.permission ?
              <div className='col-xs-12 text-center'>
                <div className='col-xs-6 text-right'>
                  <NavigationLink buttonOptions={{
                    link: '/add',
                    text: 'Add Fine',
                    className: 'btn',
                    iconClass: 'fa fa-pencil right',
                    iconPosition: 'right'
                  }} />
                </div>
                <div className='col-xs-6 text-left'>
                  <Button buttonOptions={{
                    text: 'Reset Fines',
                    className: 'btn',
                    iconClass: 'fa fa-close right',
                    iconPosition: 'right',
                    onClick: this.props.resetFines
                  }} />
                </div>
              </div> : '' }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
