// import default config
import config from './coreConfig.json';
// import en-gb language
import enGb from './languageConfig/en-gb.json';
// core reducer
const coreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      // console.log('test', _.orderBy(action.option, ['fine'], ['desc']));
      state.config.users = action.option;
      return {
        ...state
      }
    // toggle the user sign in
    case 'TOGGLE_USER_SIGNIN':
      state.config.signedIn = !state.config.signedIn;
      state.config.signedInUser = action.option[0];
      return {
        ...state
      }
    default:
      return {
        config,
        lang: enGb
      }
  }
}

export default coreReducer
