import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './Layout';

const LayoutWrapper = () => {
 const location = useLocation();
 return <Layout location={location} />;
};

export default LayoutWrapper;