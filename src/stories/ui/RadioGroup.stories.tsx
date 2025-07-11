import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithCards: Story = {
  render: () => (
    <RadioGroup defaultValue="card-1" className="grid grid-cols-3 gap-4">
      <div>
        <RadioGroupItem value="card-1" id="card-1" className="peer sr-only" />
        <Label
          htmlFor="card-1"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Basic Plan</CardTitle>
              <CardDescription className="text-xs">$9/month</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground">
                Perfect for getting started
              </p>
            </CardContent>
          </Card>
        </Label>
      </div>
      <div>
        <RadioGroupItem value="card-2" id="card-2" className="peer sr-only" />
        <Label
          htmlFor="card-2"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Pro Plan</CardTitle>
              <CardDescription className="text-xs">$19/month</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground">
                Best for professionals
              </p>
            </CardContent>
          </Card>
        </Label>
      </div>
      <div>
        <RadioGroupItem value="card-3" id="card-3" className="peer sr-only" />
        <Label
          htmlFor="card-3"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Enterprise</CardTitle>
              <CardDescription className="text-xs">$49/month</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground">
                For large organizations
              </p>
            </CardContent>
          </Card>
        </Label>
      </div>
    </RadioGroup>
  ),
};

export const NotificationSettings: Story = {
  render: () => (
    <RadioGroup defaultValue="all" className="space-y-3">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="all" />
        <Label htmlFor="all" className="text-sm font-medium">
          All notifications
        </Label>
        <p className="text-xs text-muted-foreground">
          Receive notifications for all activity
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="mentions" id="mentions" />
        <Label htmlFor="mentions" className="text-sm font-medium">
          Mentions only
        </Label>
        <p className="text-xs text-muted-foreground">
          Only receive notifications for mentions
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="none" id="none" />
        <Label htmlFor="none" className="text-sm font-medium">
          No notifications
        </Label>
        <p className="text-xs text-muted-foreground">
          Turn off all notifications
        </p>
      </div>
    </RadioGroup>
  ),
};

export const ThemeSelection: Story = {
  render: () => (
    <RadioGroup defaultValue="light" className="space-y-3">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="light" id="light" />
        <Label htmlFor="light" className="text-sm font-medium">
          Light Theme
        </Label>
        <div className="ml-auto h-4 w-4 rounded-full bg-white border-2 border-gray-300"></div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark" id="dark" />
        <Label htmlFor="dark" className="text-sm font-medium">
          Dark Theme
        </Label>
        <div className="ml-auto h-4 w-4 rounded-full bg-gray-800 border-2 border-gray-600"></div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="system" id="system" />
        <Label htmlFor="system" className="text-sm font-medium">
          System Default
        </Label>
        <div className="ml-auto h-4 w-4 rounded-full bg-gradient-to-r from-white to-gray-800 border-2 border-gray-300"></div>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-one" />
        <Label htmlFor="disabled-one" className="text-sm font-medium">
          Option One (Disabled)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-two" />
        <Label htmlFor="disabled-two" className="text-sm font-medium">
          Option Two (Disabled)
        </Label>
      </div>
    </RadioGroup>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <RadioGroup defaultValue="email" className="space-y-3">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="email" id="email" />
        <Label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium">
          <span>📧</span>
          <span>Email</span>
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="sms" id="sms" />
        <Label htmlFor="sms" className="flex items-center space-x-2 text-sm font-medium">
          <span>📱</span>
          <span>SMS</span>
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="push" id="push" />
        <Label htmlFor="push" className="flex items-center space-x-2 text-sm font-medium">
          <span>🔔</span>
          <span>Push Notification</span>
        </Label>
      </div>
    </RadioGroup>
  ),
}; 