import { ButtonCustom } from "@/components/ui/button-custom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputCustom } from "@/components/ui/input-custom";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TextareaCustom } from "@/components/ui/textarea-custom";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">shadcn/ui Component Library</h1>
          <p className="text-muted-foreground mt-2">
            A comprehensive demo of all available shadcn/ui components
          </p>
          {/* <div className="mt-4">
            <a href="/button-custom-demo" className="inline-block px-4 py-2 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">ButtonCustom Demo Page</a>
          </div> */}
        </div>

        {/* Form Components Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Form Components</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Input Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Input Component</CardTitle>
                <CardDescription>Text input fields</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <InputCustom
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <InputCustom
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Textarea Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Textarea Component</CardTitle>
                <CardDescription>Multi-line text input</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <TextareaCustom
                    id="message"
                    placeholder="Enter your message here..."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Select Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Select Component</CardTitle>
                <CardDescription>Dropdown selection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Checkbox Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Checkbox Component</CardTitle>
                <CardDescription>Checkbox inputs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
              </CardContent>
            </Card>

            {/* Switch Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Switch Component</CardTitle>
                <CardDescription>Toggle switches</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  <Switch id="airplane-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Notifications</Label>
                  <Switch id="notifications" defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Progress Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Component</CardTitle>
                <CardDescription>Progress indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Upload Progress</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="w-full" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Download Progress</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Components Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Interactive Components</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Button Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Button Component</CardTitle>
                <CardDescription>Different button variants and sizes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <ButtonCustom variant="default">Default</ButtonCustom>
                  <ButtonCustom variant="secondary">Secondary</ButtonCustom>
                  <ButtonCustom variant="destructive">Destructive</ButtonCustom>
                </div>
                <div className="flex flex-wrap gap-2">
                  <ButtonCustom variant="outline">Outline</ButtonCustom>
                  <ButtonCustom variant="ghost">Ghost</ButtonCustom>
                  <ButtonCustom variant="link">Link</ButtonCustom>
                </div>
                <div className="flex flex-wrap gap-2">
                  <ButtonCustom size="sm">Small</ButtonCustom>
                  <ButtonCustom size="default">Default</ButtonCustom>
                  <ButtonCustom size="lg">Large</ButtonCustom>
                </div>
                <div className="flex flex-wrap gap-2">
                  <ButtonCustom variant="default">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Item
                  </ButtonCustom>
                  <ButtonCustom variant="outline">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Like
                  </ButtonCustom>
                  <ButtonCustom variant="ghost">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View
                  </ButtonCustom>
                </div>
              </CardContent>
            </Card>

            {/* Dialog Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog Component</CardTitle>
                <CardDescription>Modal dialogs and overlays</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <ButtonCustom variant="outline">Open Dialog</ButtonCustom>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <InputCustom
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <InputCustom
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <ButtonCustom variant="outline">Cancel</ButtonCustom>
                      <ButtonCustom>Save changes</ButtonCustom>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Dropdown Menu Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
                <CardDescription>Contextual menus and dropdowns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <ButtonCustom variant="outline">Open Menu</ButtonCustom>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Display Components Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Display Components</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card Component Demo */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Card Component</CardTitle>
                <CardDescription>
                  Cards are used to group related content and actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is an example of a card component with header, content, and description.
                  Cards are perfect for displaying content in a structured way.
                </p>
                <div className="mt-4 flex gap-2">
                  <ButtonCustom>Primary Action</ButtonCustom>
                  <ButtonCustom variant="outline">Secondary Action</ButtonCustom>
                </div>
              </CardContent>
            </Card>

            {/* Badge Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Badge Component</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>New</Badge>
                  <Badge variant="secondary">Draft</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Beta</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Avatar Component Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Avatar Component</CardTitle>
                <CardDescription>User profile images and fallbacks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </div>
  );
}
