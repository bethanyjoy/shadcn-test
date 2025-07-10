import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'UI/StyleTest',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TailwindTest: Story = {
  render: () => (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">Tailwind CSS Test</h1>
      <p className="text-gray-700">If you can see this styled text, Tailwind is working!</p>
      
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
          Red
        </div>
        <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
          Green
        </div>
        <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
          Blue
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-600">This is a gray background with rounded corners</p>
      </div>
    </div>
  ),
};

export const ShadcnColors: Story = {
  render: () => (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-semibold">Shadcn Color Test</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-primary text-primary-foreground rounded-lg">
          Primary Background
        </div>
        <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
          Secondary Background
        </div>
        <div className="p-4 bg-muted text-muted-foreground rounded-lg">
          Muted Background
        </div>
        <div className="p-4 bg-accent text-accent-foreground rounded-lg">
          Accent Background
        </div>
        <div className="p-4 bg-destructive text-white rounded-lg">
          Destructive Background
        </div>
        <div className="p-4 border border-border rounded-lg">
          Border Test
        </div>
      </div>
    </div>
  ),
}; 