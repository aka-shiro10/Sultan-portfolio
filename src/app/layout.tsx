import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata = {
  title: 'Sultan Muhammad Khan — AI / ML Engineer',
  description: 'Final-year AI student and ML engineer building end-to-end systems with Python, Unity, and modern LLM stacks. Featured project: ENE — 3D AI Desktop Companion.',
  keywords: ['Sultan Muhammad Khan', 'AI Engineer', 'Machine Learning', 'Computer Vision', 'LLM', 'Unity', 'Python', 'PAF-IAST'],
  authors: [{ name: 'Sultan Muhammad Khan' }],
  openGraph: {
    title: 'Sultan Muhammad Khan — AI / ML Engineer',
    description: 'Building AI agents, computer vision systems, and LLM-powered apps.',
    type: 'website',
    url: 'https://aka-shiro10.github.io/Sultan-portfolio/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="806251bd-af4e-4e3f-8ba1-a996400f8d13"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
