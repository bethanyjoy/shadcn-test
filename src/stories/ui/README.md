# UI Component Stories

This directory contains Storybook stories for all your shadcn/ui components. These stories showcase different variants, states, and use cases for each component.

## Available Stories

### 🎯 Core Components

- **Button** (`Button.stories.tsx`) - All button variants, sizes, states, and icon examples
- **Card** (`Card.stories.tsx`) - Card layouts, with/without images, multiple cards, and interactive examples
- **Input** (`Input.stories.tsx`) - All input types, with labels, icons, validation states
- **Badge** (`Badge.stories.tsx`) - All badge variants, with icons, status indicators
- **Avatar** (`Avatar.stories.tsx`) - Different sizes, fallbacks, status indicators, user info
- **Select** (`Select.stories.tsx`) - Basic select, groups, sizes, with icons, disabled states

## How to View Stories

1. Start Storybook: `npm run storybook`
2. Navigate to `http://localhost:6006`
3. Look for the "UI" section in the sidebar
4. Click on any component to see its stories

## Creating New Stories

### Basic Story Structure

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '@/components/ui/your-component';

const meta: Meta<typeof YourComponent> = {
  title: 'UI/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define controls for your component props
    variant: {
      control: { type: 'select' },
      options: ['option1', 'option2'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const VariantExample: Story = {
  render: () => (
    // Custom render function for complex examples
  ),
};
```

### Best Practices

1. **Use `autodocs` tag** - Automatically generates documentation
2. **Include all variants** - Show every possible variant of your component
3. **Add interactive examples** - Include hover states, disabled states, etc.
4. **Use realistic data** - Make examples look like real-world usage
5. **Group related stories** - Use descriptive story names that group logically

### Common Story Patterns

#### Simple Component
```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <YourComponent variant="default">Default</YourComponent>
      <YourComponent variant="secondary">Secondary</YourComponent>
      <YourComponent variant="destructive">Destructive</YourComponent>
    </div>
  ),
};
```

#### Component with Icons
```tsx
export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <YourComponent>
        <svg>...</svg>
        With Icon
      </YourComponent>
    </div>
  ),
};
```

#### Form Components
```tsx
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="component">Label</Label>
      <YourComponent id="component" />
    </div>
  ),
};
```

## Component-Specific Guidelines

### For Form Components (Input, Select, etc.)
- Include all input types
- Show validation states (error, success)
- Include disabled states
- Show with and without labels
- Demonstrate with icons

### For Layout Components (Card, etc.)
- Show different content layouts
- Include interactive states
- Demonstrate responsive behavior
- Show with images and media

### For Interactive Components (Button, etc.)
- Include all variants and sizes
- Show loading states
- Demonstrate with icons
- Include disabled states

## Testing Your Stories

1. **Visual Testing** - Use Storybook's visual testing features
2. **Interaction Testing** - Add play functions for complex interactions
3. **Accessibility Testing** - Use the a11y addon to check accessibility
4. **Responsive Testing** - Test different viewport sizes

## Adding More Components

To add stories for additional shadcn/ui components:

1. Create a new file: `src/stories/ui/ComponentName.stories.tsx`
2. Follow the basic structure above
3. Import your component from `@/components/ui/component-name`
4. Create stories for all variants and use cases
5. Test in Storybook to ensure everything works

## Useful Storybook Addons

- **Controls** - Automatically generated from your component props
- **Actions** - Log component events
- **A11y** - Accessibility testing
- **Viewport** - Test responsive behavior
- **Backgrounds** - Test on different backgrounds

## Tips

- Use TypeScript for better type safety
- Keep stories focused and simple
- Use realistic, meaningful examples
- Include edge cases and error states
- Document any special requirements or limitations 