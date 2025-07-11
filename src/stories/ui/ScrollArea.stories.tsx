import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@/components/ui/scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Scrollable Content</h4>
        <p className="text-sm text-muted-foreground">
          This is a scrollable area with custom scrollbars. The content will scroll when it exceeds the container height.
        </p>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-4 rounded-md border p-4">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Item {i + 1}</p>
              <p className="text-sm text-muted-foreground">
                This is item number {i + 1} in the scrollable list.
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-[200px] rounded-md border p-4">
            <h4 className="text-sm font-medium">Card {i + 1}</h4>
            <p className="text-sm text-muted-foreground">
              This is a horizontally scrollable card.
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const CodeBlock: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border">
      <div className="p-4">
        <pre className="text-sm">
          <code>
{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`}
          </code>
        </pre>
      </div>
    </ScrollArea>
  ),
};

export const TableScroll: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border">
      <div className="p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 15 }).map((_, i) => (
              <tr key={i} className="border-b">
                <td className="p-2">User {i + 1}</td>
                <td className="p-2">user{i + 1}@example.com</td>
                <td className="p-2">{i % 2 === 0 ? 'Admin' : 'User'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollArea>
  ),
};

export const CustomHeight: Story = {
  render: () => (
    <div className="space-y-4">
      <ScrollArea className="h-[100px] w-[350px] rounded-md border p-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Short Scroll Area</h4>
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i} className="text-sm">Line {i + 1}</p>
          ))}
        </div>
      </ScrollArea>
      
      <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Tall Scroll Area</h4>
          {Array.from({ length: 30 }).map((_, i) => (
            <p key={i} className="text-sm">Line {i + 1}</p>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
}; 