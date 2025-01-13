import { useReducer } from "react";
import { AuthContext } from "./auth.context";
import { initialState, reducer } from "./auth.reducer";

function AuthProvider(properties) {
  const { children } = properties;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
