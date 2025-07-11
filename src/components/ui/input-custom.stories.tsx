import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputCustom } from "./input-custom";
import { Label } from "./label";

const meta: Meta<typeof InputCustom> = {
  title: "UI/InputCustom",
  component: InputCustom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search", "file"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <InputCustom id="email" type="email" placeholder="Enter your email" {...args} />
    </div>
  ),
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: "Pre-filled value",
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="grid gap-4 w-full max-w-md">
      <div className="grid gap-2">
        <Label htmlFor="text">Text Input</Label>
        <InputCustom id="text" type="text" placeholder="Enter text" />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="email">Email Input</Label>
        <InputCustom id="email" type="email" placeholder="Enter email" />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="password">Password Input</Label>
        <InputCustom id="password" type="password" placeholder="Enter password" />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="number">Number Input</Label>
        <InputCustom id="number" type="number" placeholder="Enter number" />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="tel">Phone Input</Label>
        <InputCustom id="tel" type="tel" placeholder="Enter phone number" />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="url">URL Input</Label>
        <InputCustom id="url" type="url" placeholder="Enter URL" />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="search">Search Input</Label>
        <InputCustom id="search" type="search" placeholder="Search..." />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="file">File Input</Label>
        <InputCustom id="file" type="file" />
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="grid gap-6 w-full max-w-md">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Contact Form</h3>
        <p className="text-sm text-muted-foreground">
          Example of InputCustom in a form context
        </p>
      </div>
      
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <InputCustom id="name" placeholder="John Doe" />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address</Label>
          <InputCustom id="email" type="email" placeholder="john@example.com" />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <InputCustom id="phone" type="tel" placeholder="+1 (555) 123-4567" />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="website">Website</Label>
          <InputCustom id="website" type="url" placeholder="https://example.com" />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="age">Age</Label>
          <InputCustom id="age" type="number" placeholder="25" min="0" max="120" />
        </div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="grid gap-4 w-full max-w-md">
      <div className="grid gap-2">
        <Label htmlFor="default">Default State</Label>
        <InputCustom id="default" placeholder="Default input" />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="focused">Focused State</Label>
        <InputCustom id="focused" placeholder="Click to focus" autoFocus />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="disabled">Disabled State</Label>
        <InputCustom id="disabled" placeholder="Disabled input" disabled />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="invalid">Invalid State</Label>
        <InputCustom id="invalid" placeholder="Invalid input" aria-invalid={true} />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="readonly">Read Only State</Label>
        <InputCustom id="readonly" value="Read only value" readOnly />
      </div>
    </div>
  ),
}; 