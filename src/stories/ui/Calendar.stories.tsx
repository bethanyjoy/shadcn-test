import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [date, setDate] = useState<Date[] | undefined>();
    
    return (
      <Calendar
        mode="multiple"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [date, setDate] = useState<{
      from: Date;
      to: Date | undefined;
    } | undefined>();
    
    return (
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date < new Date()}
        className="rounded-md border"
      />
    );
  },
};

export const WithDateRange: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        fromDate={new Date(2024, 0, 1)}
        toDate={new Date(2024, 11, 31)}
        className="rounded-md border"
      />
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <p className="text-sm text-muted-foreground">
          Selected date: {date?.toDateString()}
        </p>
      </div>
    );
  },
}; 