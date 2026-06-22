// app/dashboard/error.tsx
'use client';

import { NextErrorProps } from '@/types';
import { useEffect } from 'react';

export default function DashboardError({error,reset}:NextErrorProps) {
  useEffect(() => {
    // You can log error to monitoring service (Sentry, LogRocket, etc.)
    console.error('Dashboard Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100">
        <div className="mx-auto w-20 h-20 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
          ❌
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Oops! Something broke</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We couldn&apos;t load the dashboard right now. 
          This error has been logged.
        </p>

        <div className="bg-gray-100 rounded-2xl p-4 mb-8 text-left text-sm font-mono text-red-700 overflow-auto max-h-32">
            {error?.name}
            {error?.stack}
            {error.digest}
          {error.message}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-semibold transition flex-1"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="border border-gray-300 hover:bg-gray-50 px-8 py-3.5 rounded-2xl font-semibold transition"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}