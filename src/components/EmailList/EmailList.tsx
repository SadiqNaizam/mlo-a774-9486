import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown, SlidersHorizontal, UnfoldVertical } from 'lucide-react';

interface Email {
  id: string;
  from: string;
  fromInitials: string;
  subject: string;
  preview: string;
  date: string;
  time: string;
  category: 'Today' | 'Yesterday' | 'Last week';
  read: boolean;
  selected: boolean;
  meeting?: {
    title: string;
    time: string;
    conflict: boolean;
  }
  caution?: string;
}

const emailsData: Email[] = [
  {
    id: '1',
    from: 'C&D Culture Team',
    fromInitials: 'CT',
    subject: 'Recenter: A Modern Yoga...', 
    preview: 'Join the meeting now Meeting ID: 221 ...',
    date: 'Today',
    time: '1:13 PM',
    category: 'Today' as const,
    read: true,
    selected: false,
    meeting: {
        title: 'Thu 7/3/2025 12:00 ...',
        time: 'No conflicts',
        conflict: false
    }
  },
  {
    id: '2',
    from: 'Figma',
    fromInitials: 'F',
    subject: 'We\'ve updated our Terms of...', 
    preview: '',
    date: 'Today',
    time: '4:33 AM',
    category: 'Today' as const,
    read: false,
    selected: true,
    caution: 'CAUTION:- External Mail.'
  },
  {
    id: '3',
    from: 'KK',
    fromInitials: 'KK',
    subject: 'ACTION REQUIRED: Mee...', 
    preview: 'New monthly mailer for client engage...',
    date: 'Mon',
    time: '7:24 PM',
    category: 'Yesterday' as const,
    read: false,
    selected: false,
  },
  {
    id: '4',
    from: 'Prasad Maladkar, Mia Abendan, +1 other',
    fromInitials: 'P',
    subject: 'Ascendion Daily Digest',
    preview: 'CAUTION:- External Mail.',
    date: 'Mon',
    time: '6:44 PM',
    category: 'Yesterday' as const,
    read: true,
    selected: false,
  },
  {
    id: '5',
    from: 'C&D Culture Team',
    fromInitials: 'CT',
    subject: 'Unboxing Inclusion & All...',
    preview: 'Click here to join Join the meeting now...',
    date: 'Mon',
    time: '3:44 PM',
    category: 'Last week' as const,
    read: true,
    selected: false,
  },
];

const EmailList: React.FC = () => {
  const [emails, setEmails] = React.useState(emailsData);

  const handleSelectEmail = (id: string) => {
    setEmails(prevEmails => 
        prevEmails.map(email => ({...email, selected: email.id === id}))
    );
  };

  const groupedEmails = emails.reduce((acc, email) => {
    const category = email.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(email);
    return acc;
  }, {} as Record<string, Email[]>);

  return (
    <div className="w-[420px] border-r border-border bg-background dark:bg-zinc-900 flex flex-col">
      <div className="p-2 border-b border-border flex items-center justify-between">
        <Tabs defaultValue="focused" className="w-full">
          <TabsList className="grid w-[200px] grid-cols-2">
            <TabsTrigger value="focused">Focused</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2 text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4"/>
          <UnfoldVertical className="h-4 w-4"/>
        </div>
      </div>
      <ScrollArea className="flex-1">
        {Object.entries(groupedEmails).map(([category, emailList]) => (
            <div key={category}>
                <div className="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-muted-foreground">
                    <ChevronDown className="h-4 w-4"/>
                    <span>{category}</span>
                </div>
                {emailList.map((email) => (
                    <div
                        key={email.id}
                        onClick={() => handleSelectEmail(email.id)}
                        className={cn(
                        'flex items-start gap-3 p-3 border-b border-border cursor-pointer',
                        email.selected ? 'bg-red-100 dark:bg-red-900/40 border-l-4 border-red-500' : 'hover:bg-accent dark:hover:bg-zinc-800',
                        !email.read && 'font-bold'
                        )}
                    >
                        <Checkbox id={`check-${email.id}`} className="mt-1" />
                        <Avatar className="h-10 w-10 border border-border">
                            <AvatarImage src={`/avatars/${email.fromInitials.toLowerCase()}.png`} />
                            <AvatarFallback className={cn(
                                'text-white',
                                email.fromInitials === 'F' ? 'bg-purple-600' : 'bg-gray-500'
                            )}>{email.fromInitials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                            <div className="flex justify-between items-baseline">
                                <p className={cn("truncate", !email.read && 'text-primary dark:text-white')}>{email.from}</p>
                                <p className="text-xs text-muted-foreground whitespace-nowrap ml-2">{email.time}</p>
                            </div>
                            <p className={cn("truncate text-sm", !email.read && 'text-primary dark:text-white')}>{email.subject}</p>
                            <p className="truncate text-sm text-muted-foreground">{email.preview}</p>
                            {email.caution && <p className="truncate text-xs text-red-500">{email.caution}</p>}
                            {email.meeting && (
                                <div className="border border-border rounded-md p-2 mt-2 flex justify-between items-center bg-card dark:bg-zinc-800">
                                    <div>
                                        <p className="text-sm">{email.meeting.title}</p>
                                        <p className="text-xs text-muted-foreground">{email.meeting.time}</p>
                                    </div>
                                    <button className="px-4 py-1 text-sm rounded-sm bg-muted text-muted-foreground">RSVP</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default EmailList;
