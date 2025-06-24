import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The main application layout component that structures the entire page.
 * It implements a standard sidebar-header-content layout using flexbox.
 * The sidebar has a fixed width, the header has a fixed height, and the main content area is scrollable.
 * @param {MainAppLayoutProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The main content to be rendered within the layout's main area.
 * @param {string} [props.className] - Optional additional class names for the root element.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("flex h-screen bg-background text-foreground", className)}>
      {/* Sidebar is rendered directly. Its width is defined within the component itself. */}
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header is fixed at the top of the main content area */}
        <Header />
        {/* Main content area takes the remaining space and is scrollable */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
