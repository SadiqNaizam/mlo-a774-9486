import React from 'react';
import {
  Search,
  Menu,
  HelpCircle,
  Settings,
  Bell,
  Video,
  MessageSquare,
  Calendar
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const TopHeader: React.FC = () => {
  return (
    <header className="h-16 flex items-center justify-between px-4 border-b bg-background dark:bg-zinc-900/50 dark:border-zinc-700">
      <div className="flex items-center gap-4">
        <div className='flex items-center gap-2'>
             <img src="/ascendion-logo.svg" alt="Ascendion Logo" className="h-6 w-6" />
             <span className="font-semibold text-xl">ASCENDION</span>
        </div>
        <nav className="items-center gap-1 hidden md:flex">
            <Button variant="ghost" className="dark:text-white dark:hover:bg-zinc-700 font-semibold text-primary dark:text-rose-500 relative after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-0 after:h-0.5 after:bg-primary dark:after:bg-rose-500">Home</Button>
            <Button variant="ghost" className="dark:text-white dark:hover:bg-zinc-700">View</Button>
            <Button variant="ghost" className="dark:text-white dark:hover:bg-zinc-700">Help</Button>
        </nav>
      </div>

      <div className="flex-1 max-w-md ml-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full pl-9 bg-secondary dark:bg-zinc-800 dark:border-zinc-700"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex dark:text-white dark:hover:bg-zinc-700">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex dark:text-white dark:hover:bg-zinc-700">
          <Calendar className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex dark:text-white dark:hover:bg-zinc-700">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex dark:text-white dark:hover:bg-zinc-700">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex dark:text-white dark:hover:bg-zinc-700">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@raghuramp" />
                <AvatarFallback className='bg-rose-600 text-white'>RP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Raghuram Pathma...</p>
                <p className="text-xs leading-none text-muted-foreground">
                  raghuram.p@ascendion.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
