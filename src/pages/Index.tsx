import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import EmailList from '../components/EmailList/EmailList';
import EmailContent from '../components/EmailContent/EmailContent';

/**
 * The main page for the Email Client Dashboard, representing the "Email Client Overview".
 *
 * This page assembles the core components into the final user interface. It leverages
 * the `MainAppLayout` to provide the consistent sidebar and header structure. The main
 * content area is then composed of the `EmailList` and `EmailContent` components,
 * creating the classic two-pane email view.
 */
const Index: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The main content area is a flex container that fills the available height.
        It arranges the EmailList and EmailContent side-by-side.
      */}
      <div className="flex h-full">
        <EmailList />
        <EmailContent />
      </div>
    </MainAppLayout>
  );
};

export default Index;
