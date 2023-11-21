'use client'

import NextAuthSessionProvider from '@/providers/sessionProvider'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from "@/components/ui/toaster"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// export const metadata: Metadata = {
//   title: 'APP STOCK',
//   description: 'Applicatiom for stock PNA',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const queryClient = new QueryClient()

  return (
    <html lang="pt-br">
      <body className="bg-background">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
           <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </ThemeProvider>
      </QueryClientProvider>
      <Toaster />
      <ToastContainer />

      </body>
    </html>
  )
}
