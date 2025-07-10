import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>Simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <div className="aspect-video bg-muted" />
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>This card has an image placeholder</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content below the image.</p>
      </CardContent>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Feature 1</CardTitle>
          <CardDescription>Description for feature 1</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for feature 1</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Feature 2</CardTitle>
          <CardDescription>Description for feature 2</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for feature 2</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Feature 3</CardTitle>
          <CardDescription>Description for feature 3</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for feature 3</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Actions</CardTitle>
        <CardDescription>This card has multiple action buttons</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with some text.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card className="w-[350px] cursor-pointer transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Hover over this card to see the effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has hover effects and is clickable.</p>
      </CardContent>
    </Card>
  ),
}; 