import React from 'react';
import {
  Archive,
  ArrowBigDown,
  ArrowBigUp,
  ChevronDown,
  File,
  Flag,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Smile,
  Tag,
  Trash2,
  UserPlus,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const EmailContent: React.FC = () => {
  const selectedEmail = {
    subject: "We've updated our Terms of Service",
    from: 'Figma',
    fromEmail: 'announcements@figma.com',
    to: 'Raghuram Pathmanaban',
    date: 'Tue 6/24/2025 4:33 AM',
    content: `
      <p>Hi there,</p>
      <p>We're reaching out to let you know we're updating <strong>Figma's Terms of Service</strong> for our Starter and Professional plans. We do this regularly to ensure these terms are clear and cover the growing list of products, features, and services available to you as a Figma user. We've also updated our terms to stay current with applicable laws and regulations and to add clarity where we believe it would be useful.</p>
      <p>You can currently view both the existing and new Terms of Service <a href="#" class="text-blue-600 dark:text-blue-400 underline">here</a>, and we encourage you to do so.</p>
      <p>These updated Terms of Service go into effect on <strong>July 29, 2025</strong>&mdash;by keeping your Figma account after that date you agree to these updated terms.</p>
      <br/>
      <p>Thanks,</p>
      <p>The Figma Team</p>
    `,
  };

  const ActionButton = ({ icon: Icon, label, dropdown = false }: { icon: React.ElementType, label: string, dropdown?: boolean }) => (
    <Button variant="ghost" className="flex items-center gap-2 px-3 dark:text-white dark:hover:bg-zinc-700">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
      {dropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
    </Button>
  );

  return (
    <div className="flex-1 flex flex-col bg-card dark:bg-zinc-900">
      <div className="p-4 border-b border-border">
        <h1 className="text-2xl font-semibold text-foreground dark:text-white">{selectedEmail.subject}</h1>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <p>1/2</p>
            <Button variant="ghost" size="icon"><ArrowBigUp className="h-5 w-5"/></Button>
            <Button variant="ghost" size="icon"><ArrowBigDown className="h-5 w-5"/></Button>
          </div>
          <div className="text-sm text-muted-foreground">
            CRM - collab call Tomorrow 11:00 AM Microso...
          </div>
        </div>
      </div>

      <div className="p-2 border-b border-border flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1 flex-wrap">
          <ActionButton icon={Reply} label="Reply" />
          <ActionButton icon={ReplyAll} label="Reply all" />
          <ActionButton icon={Forward} label="Forward" />
        </div>
        <div className="flex items-center gap-1 flex-wrap">
            <Button variant="ghost" size="icon" className="dark:text-white dark:hover:bg-zinc-700"><Archive className="h-4 w-4"/></Button>
            <Button variant="ghost" size="icon" className="dark:text-white dark:hover:bg-zinc-700"><Trash2 className="h-4 w-4"/></Button>
            <Button variant="ghost" size="icon" className="dark:text-white dark:hover:bg-zinc-700"><Flag className="h-4 w-4"/></Button>
            <Button variant="ghost" size="icon" className="dark:text-white dark:hover:bg-zinc-700"><UserPlus className="h-4 w-4"/></Button>
            <Button variant="ghost" size="icon" className="dark:text-white dark:hover:bg-zinc-700"><Tag className="h-4 w-4"/></Button>
            <Button variant="ghost" size="icon" className="dark:text-white dark:hover:bg-zinc-700"><MoreVertical className="h-4 w-4"/></Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage />
              <AvatarFallback className="bg-purple-600 text-white font-bold">F</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-foreground dark:text-white">{selectedEmail.from} <span className="text-muted-foreground font-normal">&lt;{selectedEmail.fromEmail}&gt;</span></p>
                  <p className="text-sm text-muted-foreground">To: {selectedEmail.to}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{selectedEmail.date}</span>
                  <Smile className="h-5 w-5 cursor-pointer"/>
                  <Reply className="h-5 w-5 cursor-pointer"/>
                  <ReplyAll className="h-5 w-5 cursor-pointer"/>
                  <Forward className="h-5 w-5 cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>

          <Alert variant="default" className="my-4 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-800">
            <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
            <AlertDescription className='text-yellow-800 dark:text-yellow-300'>
              Some content in this message has been blocked because the sender isn't in your Safe senders list.
               <Button variant="link" className="p-0 h-auto ml-2 text-yellow-800 dark:text-yellow-300">Trust sender</Button>
               <Button variant="link" className="p-0 h-auto ml-2 text-yellow-800 dark:text-yellow-300">Show blocked content</Button>
            </AlertDescription>
          </Alert>

          <Alert variant="destructive" className="bg-black text-white p-4 my-4 border-none">
             <AlertTitle className='font-bold text-lg'>CAUTION:- External Mail.</AlertTitle>
          </Alert>

          <div className="mt-6 pl-16 text-foreground dark:text-zinc-300">
             <img src="/figma-logo.svg" alt="Figma Logo" className="h-8 mb-6"/>
            <div
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedEmail.content }}
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default EmailContent;
