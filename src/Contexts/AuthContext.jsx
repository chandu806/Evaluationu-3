import React from "react"

export const AuthContext =React.createContext();

export const AuthContextProvider =({ children}) => {
  const isAuth = true;
  
  // const[isAuth, setIsAuth] = React.useState(false);
  // const[token, setToken] = React.useState("");

  // const login = (token) => {
  //   setIsAuth(true)
  //   setToken(token);
  // }
  // const logout = () => {
  //   setIsAuth(false);
  // }


  return <AuthContext.Provider value ={isAuth}>{children}</AuthContext.Provider>
}