import React, { useState } from "react";

export default function useToken() {
  //get token and use localstorage - getItem
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    // optional chaining operator when accessing "token", because when first accessing the app, the value === undefined or null
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());
  //save token
  const saveToken = userToken =>{
    localStorage.setItem('token', JSON.stringify(userToken))
    setToken(userToken.token)
  }
  return{
setToken: saveToken,
token
  }
}
