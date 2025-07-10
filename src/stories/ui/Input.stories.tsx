import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="text">Text</Label>
        <Input type="text" id="text" placeholder="Enter text" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter email" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Enter password" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="number">Number</Label>
        <Input type="number" id="number" placeholder="Enter number" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="tel">Phone</Label>
        <Input type="tel" id="tel" placeholder="Enter phone number" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="url">URL</Label>
        <Input type="url" id="url" placeholder="Enter URL" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="search">Search</Label>
        <Input type="search" id="search" placeholder="Search..." />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="disabled">Disabled Input</Label>
        <Input id="disabled" disabled placeholder="This input is disabled" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="disabled-filled">Disabled with Value</Label>
        <Input 
          id="disabled-filled" 
          disabled 
          value="This is a disabled input with a value" 
        />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <Input className="pl-10" placeholder="Search..." />
      </div>
      
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <Input className="pl-10" type="tel" placeholder="Phone number" />
      </div>
    </div>
  ),
};

export const FileInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="file">File Upload</Label>
      <Input type="file" id="file" />
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="invalid">Invalid Input</Label>
      <Input 
        id="invalid" 
        placeholder="Invalid input" 
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive"
      />
    </div>
  ),
}; 