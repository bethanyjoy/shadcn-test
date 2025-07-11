import type { Meta, StoryObj } from '@storybook/react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarContent, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="text-sm font-medium underline underline-offset-4">
          Hover me
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithImage: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="text-sm font-medium underline underline-offset-4">
          View Profile
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm">
              Full-stack developer and UI enthusiast. Building beautiful interfaces with React and TypeScript.
            </p>
            <div className="flex items-center pt-2">
              <MapPin className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                San Francisco, CA
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithStats: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="text-sm font-medium underline underline-offset-4">
          Project Stats
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Project Analytics</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Total Users</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Active Sessions</p>
              <p className="text-2xl font-bold">567</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Revenue</p>
              <p className="text-2xl font-bold">$12,345</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Growth</p>
              <p className="text-2xl font-bold text-green-600">+23%</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithActions: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="text-sm font-medium underline underline-offset-4">
          Quick Actions
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Available Actions</h4>
          <div className="space-y-1">
            <button className="w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
              Edit Profile
            </button>
            <button className="w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
              View Settings
            </button>
            <button className="w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
              Download Data
            </button>
            <button className="w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1">
              Share Profile
            </button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithTimeline: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="text-sm font-medium underline underline-offset-4">
          Recent Activity
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Recent Activity</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 opacity-70" />
              <span className="text-sm">Updated profile 2 hours ago</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 opacity-70" />
              <span className="text-sm">Added new project 1 day ago</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 opacity-70" />
              <span className="text-sm">Joined team 3 days ago</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}; 