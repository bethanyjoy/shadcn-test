import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
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
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Volume</label>
        <Slider defaultValue={[50]} max={100} step={1} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
      </div>
    </div>
  ),
};

export const RangeSlider: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <Slider defaultValue={[20, 80]} max={100} step={1} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$0</span>
          <span>$50</span>
          <span>$100</span>
        </div>
      </div>
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Rating</label>
        <Slider defaultValue={[3]} max={5} step={1} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};

export const MultipleSliders: Story = {
  render: () => (
    <div className="w-[200px] space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Brightness</label>
        <Slider defaultValue={[75]} max={100} step={1} />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Contrast</label>
        <Slider defaultValue={[60]} max={100} step={1} />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Saturation</label>
        <Slider defaultValue={[40]} max={100} step={1} />
      </div>
    </div>
  ),
}; 