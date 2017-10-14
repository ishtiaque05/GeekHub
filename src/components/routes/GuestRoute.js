import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';

// Created Higher Order components to override routes
// Override with higher order component to check authentication and redirection
// Same as Simple component Routing in index.js

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={
    props => !isAuthenticated ? <Component {...props} /> : < Redirect to="/dashboard" />
  } />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps)(UserRoute);
