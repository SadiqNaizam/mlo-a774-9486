import React from 'react';
import TopHeader from '../Header/TopHeader';

/**
 * A layout component that serves as the main header for the application.
 * It wraps the more detailed TopHeader component, which includes search, actions, and user profile.
 */
const Header: React.FC = () => {
  return <TopHeader />;
};

export default Header;
