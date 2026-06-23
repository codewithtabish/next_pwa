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
  Globe,
  Shield,
  Trash2,
  Download,
  Smartphone,
} from "lucide-react";

import { useTheme } from "next-themes";
import { useState } from "react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  const [notifications, setNotifications] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  return (
    <div className="h-screen overflow-y-auto bg-background">

      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          <h1 className="text-lg font-semibold">Settings</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 pb-24">

        {/* ACCOUNT */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Account</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <Button className="w-full justify-between active:scale-[0.98] transition">
              Edit Profile
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button variant="outline" className="w-full justify-between active:scale-[0.98] transition">
              Security Settings
              <Shield className="h-4 w-4" />
            </Button>

            <Button variant="outline" className="w-full justify-between active:scale-[0.98] transition text-red-500">
              Delete Account
              <Trash2 className="h-4 w-4" />
            </Button>
             {/* C:\Program Files\Eclipse Adoptium\jdk-17.0.19.10-hotspot */}
            {/* C:\Users\TABISH\AppData\Local\Android\Sdk */}
          </CardContent>
        </Card>

        {/* APPEARANCE */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Appearance</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            {/* Theme */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
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

            {/* Theme Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full justify-between active:scale-[0.98] transition">
                  Theme Options
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side="bottom" className="h-72">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Choose Theme</h2>

                  <div className="grid gap-2">
                    <Button onClick={() => setTheme("light")}>☀ Light</Button>
                    <Button onClick={() => setTheme("dark")}>🌙 Dark</Button>
                    <Button onClick={() => setTheme("system")}>💻 System</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Language */}
            <Button variant="outline" className="w-full justify-between">
              Language
              <Globe className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* PREFERENCES */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Preferences</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </span>

              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Offline Mode
              </span>

              <Switch
                checked={offlineMode}
                onCheckedChange={setOfflineMode}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Analytics
              </span>

              <Switch
                checked={analytics}
                onCheckedChange={setAnalytics}
              />
            </div>
          </CardContent>
        </Card>

        {/* ABOUT */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">About</CardTitle>
          </CardHeader>

          <CardContent className="text-sm text-muted-foreground space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              CodeWithTabish v1.0.0
            </div>

            <p>
              Built with Next.js, shadcn/ui, TailwindCSS and PWA support.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}