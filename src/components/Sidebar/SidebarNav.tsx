import React from 'react';
import { Folder, MailPlus, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import FolderSection from './FolderSection';

interface FolderItem {
  id: string;
  name: string;
  icon: React.ElementType;
  count?: number;
}

interface Account {
  id: string;
  name: string;
  folders: FolderItem[];
}

const SidebarNav: React.FC = () => {
  const [activeFolder, setActiveFolder] = React.useState<string>('inbox-raghuram');

  const favorites: FolderItem[] = [
    { id: 'inbox-fav', name: 'Inbox', icon: Folder, count: 2 },
    { id: 'sent-fav', name: 'Sent Items', icon: Folder },
    { id: 'drafts-fav', name: 'Drafts', icon: Folder, count: 4 },
    { id: 'deleted-fav', name: 'Deleted Items', icon: Folder, count: 28 },
  ];

  const accounts: Account[] = [
    {
      id: 'raghuram.pathmanaba...',
      name: 'raghuram.pathmanaba...',
      folders: [
        { id: 'inbox-raghuram', name: 'Inbox', icon: Folder, count: 2 },
        { id: 'drafts-raghuram', name: 'Drafts', icon: Folder, count: 4 },
        { id: 'sent-raghuram', name: 'Sent Items', icon: Folder },
        { id: 'deleted-raghuram', name: 'Deleted Items', icon: Folder, count: 28 },
        { id: 'junk-raghuram', name: 'Junk Email', icon: Folder },
        { id: 'notes-raghuram', name: 'Notes', icon: Folder, count: 2 },
        { id: 'archive-raghuram', name: 'Archive', icon: Folder },
        { id: 'history-raghuram', name: 'Conversation History', icon: Folder },
        { id: 'rss-raghuram', name: 'RSS Feeds', icon: Folder },
        { id: 'search-raghuram', name: 'Search Folders', icon: Folder },
      ],
    },
  ];

  return (
    <div className={cn("w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col h-screen dark:bg-zinc-900")}>
      <div className="p-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Outlook</h1>
        {/* A placeholder for potential actions */}
      </div>
      <div className="px-3 pb-3">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-rose-600 dark:hover:bg-rose-700">
          <Pencil className="mr-2 h-4 w-4" />
          New mail
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-1 space-y-2">
          <FolderSection 
            title="Favorites" 
            folders={favorites} 
            activeFolder={activeFolder} 
            onFolderClick={setActiveFolder} 
            initiallyOpen
          />
          {accounts.map(account => (
            <FolderSection 
              key={account.id}
              title={account.name} 
              folders={account.folders} 
              activeFolder={activeFolder} 
              onFolderClick={setActiveFolder}
              initiallyOpen
            />
          ))}
           <button className="flex items-center w-full text-left px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded-md">
            <MailPlus className="mr-3 h-4 w-4"/>
            Go to Groups
          </button>
        </div>
      </ScrollArea>
    </div>
  );
};

export default SidebarNav;
