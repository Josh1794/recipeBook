import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Menu } from "semantic-ui-react";

const Navbar = ({ handleClick, isLoggedIn, userId }) => (
  <div className="Menu">
    <Menu secondary>
      {isLoggedIn ? (
        <>
          {/* The navbar will show these links after you log in */}
          <Menu.Item>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/books`}>Books</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </Menu.Item>
          </Menu.Menu>
        </>
      ) : (
        <>
          {/* The navbar will show these links before you log in */}
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  userId: PropTypes.number
};
