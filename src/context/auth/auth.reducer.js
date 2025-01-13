// todo use local storage
export const initialState = {
  isAuthenticated: false,
  token: null,
  user: null
}

const handleLogin = (state, payload) => {
  // todo set token in local storage
  return {
    ...state,
    isAuthenticated: true,
    token: payload.token,
    user: payload.user
  }
}

const handleLogout = (state) => {
  // todo remove token from local storage
  return {
    ...state,
    isAuthenticated: false,
    token: null,
    user: null
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return  handleLogin(state, action.payload);
    case "LOGOUT":
      return handleLogout(state);
    default:
      console.error("Unhandled action type: ", action.type);
      return state;
  }
}