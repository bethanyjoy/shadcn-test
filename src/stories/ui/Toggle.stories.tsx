import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="mr-2 h-4 w-4" />
      Bold
    </Toggle>
  ),
};

export const MultipleToggles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const WithTextAndIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="mr-2 h-4 w-4" />
        Bold
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="mr-2 h-4 w-4" />
        Italic
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="mr-2 h-4 w-4" />
        Underline
      </Toggle>
    </div>
  ),
};

export const AlignmentToggles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Toggle aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Toggle aria-label="Toggle bold" disabled>
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic" disabled>
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Small toggle">
        <Bold className="h-3 w-3" />
      </Toggle>
      <Toggle size="default" aria-label="Default toggle">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Large toggle">
        <Bold className="h-5 w-5" />
      </Toggle>
    </div>
  ),
}; 