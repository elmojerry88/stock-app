'use client'

import NextAuthSessionProvider from '@/providers/sessionProvider'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from 'react-query'


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
      </body>
    </html>
  )
}
