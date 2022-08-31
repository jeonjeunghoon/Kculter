import React from 'react';
import { Navigate } from 'react-router-dom';
import {checkAdmin} from "./container/CheckAdmin"


const ManagerRoute = ({ component: Component }) => {
  return checkAdmin() ? Component : <Navigate to="/"/>;
};

export default ManagerRoute;