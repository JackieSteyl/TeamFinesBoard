/*
 * signIn/signOut user
 *
 * @method toggleUserSignIn
 */
export const toggleUserSignIn = (aUser) => {
  return {
    type: 'TOGGLE_USER_SIGNIN',
    option: aUser
  }
}
/*
 * set users
 *
 * @method setUsers
 */
export const setUsers = (aOption) => {
  return {
    type: 'SET_USERS',
    option: aOption
  }
}
