// import React from "react";
import { useRef } from "react";
import "./layout.css";
// import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};



export default Layout;
