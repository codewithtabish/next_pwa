"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Settings,
  Moon,
  Sun,
  Bell,
  Info,
  ChevronRight,
} from "lucide-react";

import { useTheme } from "next-themes";
import { useState } from "react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          <h1 className="text-xl font-semibold">
            Settings
          </h1>
        </div>

        {/* Profile Card */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">
              Account
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-between"
            >
              Edit Profile
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between"
            >
              Privacy Policy
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Appearance Card */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">
              Appearance
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            {/* Theme Switch */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {theme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}

                <span>Dark Mode</span>
              </div>

              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
            </div>

            <Separator />

            {/* More Theme Options (Sheet Example) */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between"
                >
                  Theme Options
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side="bottom" className="h-64">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">
                    Choose Theme
                  </h2>

                  <div className="grid gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setTheme("light")}
                    >
                      ☀ Light
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => setTheme("dark")}
                    >
                      🌙 Dark
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => setTheme("system")}
                    >
                      💻 System
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">
              Notifications
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Enable Notifications</span>
              </div>

              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">
              About
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              CodeWithTabish v1.0.0
            </div>

            <p>
              Built with Next.js, shadcn/ui, and PWA technology.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}