import axios from "axios";
import { useContext, useReducer } from "react";
import UserContext from ".";
import { baseUrl } from "../api";

const ACTIONS={
  SET_USER :"SET_USER",
}

const initalState = {
  user:false
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:      
      return {...state , user:action.payload};      
    default:
      return state;
  }
};

export const UserProvider = ({ children, ...otherProps }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const LocalStorage = window.localStorage;
  const SessionStorage = window.sessionStorage;

  const isLogged = () => {
    const user = SessionStorage.getItem("UserLoged");
    if(user){
      setUser(true)
      return true;
    }
    return state.user
  };
  const setUser = (data)=>{
    dispatch({type:ACTIONS.SET_USER,payload:data})
  }
  const setRememberMe=(data)=>{
    if(data){
      SessionStorage.setItem("UserLoged",JSON.stringify(data))
    }else{
      SessionStorage.removeItem("UserLoged")
    }
  }

  const value = { state,  setUser,setRememberMe, isLogged,SessionStorage , LocalStorage };

  return (
    <UserContext.Provider value={value} {...otherProps}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserProvider = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserProvider must be used within a UserProvider");
  }
  return context;
};
