import React from 'react';
import { Navigate } from 'react-router-dom';
import {isMember} from './container/CheckLogin'


const PrivateRoute = ({ component: Component }) => {
  return isMember() ? Component : <Navigate to="/login"/>;
};

export default PrivateRoute;