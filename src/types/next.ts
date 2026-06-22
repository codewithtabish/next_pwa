import React from "react";

export interface NextErrorProps {
  error: Error & { digest: string };
  reset(): void;
}

export interface LayoutProps {
  children: React.ReactNode;
  params?: Promise<Record<string, string>>;
}