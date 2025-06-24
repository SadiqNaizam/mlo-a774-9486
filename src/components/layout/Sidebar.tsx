import React from 'react';
import SidebarNav from '../Sidebar/SidebarNav';

/**
 * A layout component that serves as the main sidebar for the application.
 * It wraps the more detailed SidebarNav component, which contains the navigation logic and links.
 */
const Sidebar: React.FC = () => {
  return <SidebarNav />;
};

export default Sidebar;
