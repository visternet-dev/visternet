import Loader from "components/ui-component/Loader";
// project imports
import useAuth from "hooks/useAuth";
import PropTypes from "prop-types";

import { useRouter } from "next/router";

import { useEffect } from "react";

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }) => {
  // TODO: undo this line for handle auth
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;

  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  if (!isLoggedIn) return <Loader />;

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
