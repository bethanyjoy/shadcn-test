import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/ui/progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[200px] space-y-2">
      <Progress value={33} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[200px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>33%</span>
      </div>
      <Progress value={33} />
    </div>
  ),
};

export const DifferentValues: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const FileUpload: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>document.pdf</span>
          <span>67%</span>
        </div>
        <Progress value={67} />
        <p className="text-xs text-muted-foreground">Uploading...</p>
      </div>
    </div>
  ),
};

export const MultipleProgress: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>CPU Usage</span>
          <span>45%</span>
        </div>
        <Progress value={45} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Memory Usage</span>
          <span>78%</span>
        </div>
        <Progress value={78} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Disk Usage</span>
          <span>23%</span>
        </div>
        <Progress value={23} />
      </div>
    </div>
  ),
};

export const TaskProgress: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Task 1: Data Processing</span>
          <span>12/20</span>
        </div>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Task 2: Image Optimization</span>
          <span>8/15</span>
        </div>
        <Progress value={53} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Task 3: Database Backup</span>
          <span>15/15</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}; 