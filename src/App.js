/*
 * Dependencies
 */
// import react
import React, { Component } from 'react';
// connect
import { connect } from 'react-redux';
/*
 * containers
 */
// import Login
import Login from './containers/Login/Login';
// import main container
import Home from './containers/Home/Home';
// import Footer
import Footer from './containers/Footer/Footer';
// import AddReason
import AddReason from './containers/AddReason/AddReason';
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
 * initialise the App
 *
 * @const App
 */
class App extends Component {
  render() {
    if (this.props.core.config.signedIn) {
      return (
        <div>
          <div className='app container'>
            {this.props.location.pathname === '/add' ?
              <AddReason /> : <Home />}
          </div>
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div>
          <div className='app'>
            <Login />
          </div>
        </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
