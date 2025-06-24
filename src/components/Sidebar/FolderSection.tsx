import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface FolderItem {
  id: string;
  name: string;
  icon: React.ElementType;
  count?: number;
}

interface FolderSectionProps {
  title: string;
  folders: FolderItem[];
  activeFolder: string;
  onFolderClick: (id: string) => void;
  initiallyOpen?: boolean;
}

const FolderSection: React.FC<FolderSectionProps> = ({ 
    title, 
    folders, 
    activeFolder, 
    onFolderClick, 
    initiallyOpen = false 
}) => {
  const [isOpen, setIsOpen] = React.useState(initiallyOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-sidebar-foreground hover:bg-sidebar-accent rounded-md">
        <span>{title}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 mt-1 space-y-1">
        {folders.map(folder => (
          <button
            key={folder.id}
            onClick={() => onFolderClick(folder.id)}
            className={cn(
              'flex items-center w-full text-left px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded-md',
              activeFolder === folder.id && 'bg-sidebar-accent font-semibold text-sidebar-accent-foreground dark:bg-rose-500/20 dark:text-rose-400'
            )}
          >
            <folder.icon className="mr-3 h-4 w-4" />
            <span className="flex-1">{folder.name}</span>
            {folder.count && (
              <Badge variant="secondary" className={cn(
                'h-5 px-2 text-xs font-normal',
                activeFolder === folder.id ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600 dark:bg-zinc-700 dark:text-zinc-200'
              )}>
                {folder.count}
              </Badge>
            )}
          </button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FolderSection;
