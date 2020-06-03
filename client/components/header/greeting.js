import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../actions/sessionActions";
import { Link } from "react-router-dom";

export const Greeting = () => {
  // if we have a user logged in pass that user to our selector
  // regardless is they are company or worker
  const user = useSelector(({ session, entities }) =>
    entities.users[session.id] ? entities.users[session.id] : null
  );
  const dispatch = useDispatch();

  if (user) {
    return (
      <div className="greeting">
        <h1>Hello {user.username}</h1>
        <button onClick={() => dispatch(signOut())}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div className="greeting">
        <div className="auth-links">
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
};

export default Greeting;
