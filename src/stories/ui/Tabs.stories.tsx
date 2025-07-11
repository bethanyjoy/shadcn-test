import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Account</h4>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Password</h4>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Overview</h4>
          <p className="text-sm text-muted-foreground">
            Get a high-level view of your business metrics and performance.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Analytics</h4>
          <p className="text-sm text-muted-foreground">
            Dive deep into your data with detailed analytics and insights.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Reports</h4>
          <p className="text-sm text-muted-foreground">
            Generate and download comprehensive reports for your business.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]" orientation="vertical">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-0">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Account</h4>
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password" className="mt-0">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Password</h4>
          <p className="text-sm text-muted-foreground">
            Update your password and security settings.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="mt-0">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Configure your application preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="dashboard" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
          </svg>
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="users" className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
          Users
        </TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Dashboard</h4>
          <p className="text-sm text-muted-foreground">
            View your dashboard with key metrics and insights.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="users">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Users</h4>
          <p className="text-sm text-muted-foreground">
            Manage your user accounts and permissions.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTabs: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Active Tab</h4>
          <p className="text-sm text-muted-foreground">
            This tab is active and functional.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="another">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Another Tab</h4>
          <p className="text-sm text-muted-foreground">
            This is another functional tab.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}; 