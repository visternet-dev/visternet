import PropTypes from "prop-types";

// project imports
import Customization from "../Customization";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = ({ children }) => <>{children}</>;

MinimalLayout.propTypes = {
  children: PropTypes.node
};

export default MinimalLayout;
