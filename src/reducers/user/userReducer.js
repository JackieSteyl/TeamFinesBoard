// import default user
import userConfig from './userConfig.json';
// core reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_USER_SIGNIN':
      return {
        ...state,
        signedIn: !state.signedIn
      }
    default:
      return userConfig
  }
}

export default userReducer
