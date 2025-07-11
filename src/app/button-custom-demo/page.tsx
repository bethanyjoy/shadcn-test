"use client"

import { ButtonCustom } from "@/components/ui/button-custom";
import { Download, Heart, Settings, User, Plus, Trash2, Edit, Save, Loader2Icon } from "lucide-react";

export default function ButtonCustomDemo() {
  return (
    <div className="container mx-auto max-w-3xl py-12 space-y-12">
      <h1 className="text-3xl font-bold mb-8">ButtonCustom Component Demo</h1>

      {/* All Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonCustom variant="default">Default</ButtonCustom>
          <ButtonCustom variant="destructive">Destructive</ButtonCustom>
          <ButtonCustom variant="outline">Outline</ButtonCustom>
          <ButtonCustom variant="secondary">Secondary</ButtonCustom>
          <ButtonCustom variant="ghost">Ghost</ButtonCustom>
          <ButtonCustom variant="link">Link</ButtonCustom>
        </div>
      </section>

      {/* All Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex items-center gap-4">
          <ButtonCustom size="sm">Small</ButtonCustom>
          <ButtonCustom size="default">Default</ButtonCustom>
          <ButtonCustom size="lg">Large</ButtonCustom>
          <ButtonCustom size="icon">
            <Settings />
          </ButtonCustom>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonCustom>
            <Download />
            Download
          </ButtonCustom>
          <ButtonCustom variant="outline">
            <Heart />
            Like
          </ButtonCustom>
          <ButtonCustom variant="secondary">
            <User />
            Profile
          </ButtonCustom>
          <ButtonCustom variant="destructive">
            <Trash2 />
            Delete
          </ButtonCustom>
        </div>
      </section>

      {/* Icon Only */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Icon Only</h2>
        <div className="flex items-center gap-4">
          <ButtonCustom size="icon" variant="default">
            <Plus />
          </ButtonCustom>
          <ButtonCustom size="icon" variant="outline">
            <Settings />
          </ButtonCustom>
          <ButtonCustom size="icon" variant="secondary">
            <Edit />
          </ButtonCustom>
          <ButtonCustom size="icon" variant="destructive">
            <Trash2 />
          </ButtonCustom>
        </div>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Disabled</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonCustom disabled>Disabled Default</ButtonCustom>
          <ButtonCustom variant="outline" disabled>
            Disabled Outline
          </ButtonCustom>
          <ButtonCustom variant="destructive" disabled>
            Disabled Destructive
          </ButtonCustom>
          <ButtonCustom size="icon" disabled>
            <Settings />
          </ButtonCustom>
        </div>
      </section>

      {/* Loading */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Loading</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonCustom disabled>
            <Loader2Icon className="animate-spin" />
            Loading...
          </ButtonCustom>
          <ButtonCustom variant="outline" disabled>
            <Loader2Icon className="animate-spin" />
            Saving...
          </ButtonCustom>
        </div>
      </section>

      {/* Action Buttons */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Action Buttons</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <ButtonCustom variant="outline">
              <Edit />
              Edit
            </ButtonCustom>
            <ButtonCustom>
              <Save />
              Save
            </ButtonCustom>
          </div>
          <div className="flex gap-2">
            <ButtonCustom variant="outline">Cancel</ButtonCustom>
            <ButtonCustom variant="destructive">
              <Trash2 />
              Delete
            </ButtonCustom>
          </div>
        </div>
      </section>

      {/* Custom Styling */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Custom Styling</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonCustom className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Gradient Button
          </ButtonCustom>
          <ButtonCustom className="rounded-full px-8">
            Rounded Button
          </ButtonCustom>
          <ButtonCustom className="border-2 border-dashed border-gray-400 hover:border-solid">
            Dashed Border
          </ButtonCustom>
          <ButtonCustom className="shadow-lg hover:shadow-xl transition-shadow">
            Shadow Button
          </ButtonCustom>
        </div>
      </section>

      {/* Interactive */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <ButtonCustom 
              onClick={() => alert('Button clicked!')}
              className="hover:scale-105 transition-transform"
            >
              Click Me!
            </ButtonCustom>
            <ButtonCustom 
              variant="outline"
              onMouseEnter={() => console.log('Mouse entered')}
              onMouseLeave={() => console.log('Mouse left')}
            >
              Hover Me
            </ButtonCustom>
          </div>
          <p className="text-sm text-muted-foreground">
            Check the console for hover events and click the first button for an alert.
          </p>
        </div>
      </section>
    </div>
  );
} 