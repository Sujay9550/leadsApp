import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import authImage from "../../img/auth.png";
import AuthContext from "../../store/auth-context";
import "react-lazy-load-image-component/src/effects/blur.css";
import * as classes from "./Auth.module.css";

const SIGNIN_URL = process.env.SIGNIN_URL;
const SIGNUP_URL = process.env.SIGNUP_URL;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginRequest = async () => {
      try {
        const url = SIGNIN_URL;

        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        setIsLoading(false);

        if (!response.ok)
          throw new Error(`Failed to login! ${response.status}`);

        const data = await response.json();

        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/leads");
      } catch (error) {
        setError(error.message);
      }
    };

    const signUpRequest = async () => {
      try {
        const url = SIGNUP_URL;

        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        setIsLoading(false);

        if (response.ok && response.status === 200) {
          const data = await response.json();
        }

        if (!response.ok && response.status === 400) {
          const errorData = await response.json();
          throw new Error(`Failed to Sign Up. ${errorData.error.message}`);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    setIsLoading(true);
    if (isLogin) {
      loginRequest();
    } else {
      signUpRequest();
    }
  };

  return (
    <div className={`container ${classes["auth-container"]} mt-5 p-5`}>
      <div className="row">
        <div className={`col-lg-6 p-5 text-center ${classes["auth-image"]}`}>
          <LazyLoadImage
            src={authImage}
            effect="blur"
            height="330px"
            className="img-fluid"
          ></LazyLoadImage>
          <h5>Start creating new leads. Login or Signup</h5>
        </div>
        <div className="col-lg-6 p-5 d-flex justify-content-center align-items-center">
          <div className={classes["form-container"]}>
            <div className="text-center">
              <h5>{isLogin ? "Login to your Account" : "SignUp"}</h5>
            </div>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control email"
                  placeholder="Email"
                  aria-label="Email"
                  ref={emailInputRef}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control password"
                  placeholder="Password"
                  aria-label="Password"
                  ref={passwordInputRef}
                />
              </div>
              <div className="mb-3 d-grid">
                {!isLoading && (
                  <button className="btn btn-primary mb-3">
                    {isLogin ? "Login" : "Create Account"}
                  </button>
                )}
                {isLoading && (
                  <p className="text-center text-success">Sending Request</p>
                )}
                {error && <p className="text-center text-danger">{error}</p>}
                <a
                  className="btn btn-primary mb-3"
                  onClick={switchAuthModeHandler}
                >
                  {isLogin
                    ? "Create new Account"
                    : "Login with existing account"}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
