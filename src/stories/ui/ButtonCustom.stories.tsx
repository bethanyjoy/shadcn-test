import type { Meta, StoryObj } from '@storybook/react';
import { ButtonCustom } from '@/components/ui/button-custom';
import { Download, Heart, Settings, User, Plus, Trash2, Edit, Save, Loader2Icon } from 'lucide-react';

const meta: Meta<typeof ButtonCustom> = {
  title: 'UI/ButtonCustom',
  component: ButtonCustom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonCustom variant="default">Default</ButtonCustom>
      <ButtonCustom variant="destructive">Destructive</ButtonCustom>
      <ButtonCustom variant="outline">Outline</ButtonCustom>
      <ButtonCustom variant="secondary">Secondary</ButtonCustom>
      <ButtonCustom variant="ghost">Ghost</ButtonCustom>
      <ButtonCustom variant="link">Link</ButtonCustom>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ButtonCustom size="sm">Small</ButtonCustom>
      <ButtonCustom size="default">Default</ButtonCustom>
      <ButtonCustom size="lg">Large</ButtonCustom>
      <ButtonCustom size="icon">
        <Settings />
      </ButtonCustom>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonCustom>
        <Download />
        Download
      </ButtonCustom>
      <ButtonCustom variant="outline">
        <Heart />
        Like
      </ButtonCustom>
      <ButtonCustom variant="secondary">
        <User />
        Profile
      </ButtonCustom>
      <ButtonCustom variant="destructive">
        <Trash2 />
        Delete
      </ButtonCustom>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ButtonCustom size="icon" variant="default">
        <Plus />
      </ButtonCustom>
      <ButtonCustom size="icon" variant="outline">
        <Settings />
      </ButtonCustom>
      <ButtonCustom size="icon" variant="secondary">
        <Edit />
      </ButtonCustom>
      <ButtonCustom size="icon" variant="destructive">
        <Trash2 />
      </ButtonCustom>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonCustom disabled>Disabled Default</ButtonCustom>
      <ButtonCustom variant="outline" disabled>
        Disabled Outline
      </ButtonCustom>
      <ButtonCustom variant="destructive" disabled>
        Disabled Destructive
      </ButtonCustom>
      <ButtonCustom size="icon" disabled>
        <Settings />
      </ButtonCustom>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonCustom disabled>
        {/* <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> */}
        <Loader2Icon className="animate-spin" />
        Loading...
      </ButtonCustom>
      <ButtonCustom variant="outline" disabled>
        {/* <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> */}
        <Loader2Icon className="animate-spin" />
        Saving...
      </ButtonCustom>
    </div>
  ),
};

export const ActionButtons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <ButtonCustom variant="outline">
          <Edit />
          Edit
        </ButtonCustom>
        <ButtonCustom>
          <Save />
          Save
        </ButtonCustom>
      </div>
      <div className="flex gap-2">
        <ButtonCustom variant="outline">Cancel</ButtonCustom>
        <ButtonCustom variant="destructive">
          {/* <Trash2 className="mr-2 h-4 w-4" /> */}
          <Trash2 />
          Delete
        </ButtonCustom>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonCustom className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
        Gradient Button
      </ButtonCustom>
      <ButtonCustom className="rounded-full px-8">
        Rounded Button
      </ButtonCustom>
      <ButtonCustom className="border-2 border-dashed border-gray-400 hover:border-solid">
        Dashed Border
      </ButtonCustom>
      <ButtonCustom className="shadow-lg hover:shadow-xl transition-shadow">
        Shadow Button
      </ButtonCustom>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <ButtonCustom 
          onClick={() => alert('Button clicked!')}
          className="hover:scale-105 transition-transform"
        >
          Click Me!
        </ButtonCustom>
        <ButtonCustom 
          variant="outline"
          onMouseEnter={() => console.log('Mouse entered')}
          onMouseLeave={() => console.log('Mouse left')}
        >
          Hover Me
        </ButtonCustom>
      </div>
      <p className="text-sm text-muted-foreground">
        Check the console for hover events and click the first button for an alert.
      </p>
    </div>
  ),
}; 