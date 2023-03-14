import React from "react";
import { history } from '../helpers/history';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));//this function only decodes the payload of a JWT,
  } catch (e) {
    return null;
  }
};


const AuthVerify = (props) => {
  history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <div></div>;
};

export default AuthVerify;


/* This is a React component that listens to changes in the browser history and checks the expiration time of a JWT stored in the browser's local storage.

The component starts by registering a listener with the history object, which is part of the React Router library. Whenever the user navigates to a new page or updates the browser history, the listener function is called.

Inside the listener function, the component first checks if there is a user object stored in the local storage. If there is, it retrieves the user's access token and passes it to the parseJwt function, which decodes the JWT and returns the payload object.

The component then checks the expiration time of the JWT by looking at the exp claim in the payload object. The exp value is the expiration time of the token in seconds since the Unix epoch. The component multiplies the exp value by 1000 to convert it to milliseconds and compares it to the current time using Date.now(). If the expiration time has passed, the component calls the logOut function passed in as a prop to log the user out.

Finally, the component returns an empty div element, as it doesn't render any visible content. The purpose of this component is to monitor the expiration of the JWT and log the user out automatically when the token expires.
 */