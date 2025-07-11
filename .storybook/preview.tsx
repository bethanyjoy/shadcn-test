import React from 'react'
import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import { ModeDecorator } from "./modeDecorator";

export const decorators = [ModeDecorator];

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "oklch(1 0 0)" }, // matches :root --background
      { name: "dark", value: "oklch(0.145 0 0)" }, // matches .dark --background
    ],
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  decorators: [
    (Story) => (
      <div className="font-sans antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview; 