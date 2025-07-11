import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-[100px] items-center space-x-4">
      <div>Left content</div>
      <Separator orientation="vertical" />
      <div>Right content</div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium leading-none">Section 1</h4>
        <p className="text-sm text-muted-foreground">
          This is the first section of content.
        </p>
      </div>
      <Separator />
      <div className="space-y-2">
        <h4 className="text-sm font-medium leading-none">Section 2</h4>
        <p className="text-sm text-muted-foreground">
          This is the second section of content.
        </p>
      </div>
    </div>
  ),
};

export const MultipleSeparators: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>First section</div>
      <Separator />
      <div>Second section</div>
      <Separator />
      <div>Third section</div>
      <Separator />
      <div>Fourth section</div>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <div className="flex h-[100px] items-center space-x-4">
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-sm font-medium">Home</a>
        <Separator orientation="vertical" />
        <a href="#" className="text-sm font-medium">About</a>
        <Separator orientation="vertical" />
        <a href="#" className="text-sm font-medium">Contact</a>
      </nav>
    </div>
  ),
};

export const InForm: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Personal Information</label>
        <input className="w-full rounded-md border px-3 py-2" placeholder="Name" />
        <input className="w-full rounded-md border px-3 py-2" placeholder="Email" />
      </div>
      <Separator />
      <div className="space-y-2">
        <label className="text-sm font-medium">Account Settings</label>
        <input className="w-full rounded-md border px-3 py-2" placeholder="Username" />
        <input className="w-full rounded-md border px-3 py-2" type="password" placeholder="Password" />
      </div>
    </div>
  ),
}; 