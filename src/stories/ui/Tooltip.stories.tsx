import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { InputCustom } from "../../components/ui/input-custom";
import { Label } from "../../components/ui/label";
import { Info, HelpCircle, Settings, Download, Heart, Star } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Additional information</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Long tooltip</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>This is a longer tooltip with more detailed information that might wrap to multiple lines.</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant="secondary" className="cursor-help">
          Beta
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>This feature is in beta testing</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-8">
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline">No delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows immediately</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button variant="outline">500ms delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows after 500ms</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <Button variant="outline">1s delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows after 1 second</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const ActionButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to favorites</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Star className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Rate this item</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const FormHelp: Story = {
  render: () => (
    <div className="grid gap-4 w-full max-w-md">
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="email">
            Email Address
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>We'll use this to send you important updates</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <InputCustom
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="password">
            Password
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Must be at least 8 characters with uppercase, lowercase, and number</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <InputCustom
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-3 h-3 bg-green-500 rounded-full cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Online</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Away</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-3 h-3 bg-red-500 rounded-full cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Offline</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-3 h-3 bg-blue-500 rounded-full cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Busy</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const ComplexContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Complex tooltip</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <p className="font-medium">Feature Details</p>
          <p className="text-xs text-muted-foreground">
            This feature includes advanced functionality with multiple options and settings.
          </p>
          <div className="flex gap-2 pt-1">
            <Badge variant="secondary" className="text-xs">New</Badge>
            <Badge variant="outline" className="text-xs">Beta</Badge>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
}; 