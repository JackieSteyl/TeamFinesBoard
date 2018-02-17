/*
 * Dependencies
 */
// import react
import React, { Component } from 'react';
// connect
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
  return {}
}
/*
 * initialise the Footer
 *
 * @const Footer
 */
class Footer extends Component {
  constructor(props) {
    super(props);
    this.getFullYear = this.getFullYear.bind(this);
    this.state = this.props;
  }
  /*
   * get the current full year
   *
   * @method getFullYear
   */
  getFullYear() {
    let date = new Date(),
      year = date.getFullYear();
    return year;
  }
  render() {
    return (
      <div className='app-footer'>
        &copy; {this.getFullYear()} <b>{this.props.core.lang.tinkerbell}</b>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer)
