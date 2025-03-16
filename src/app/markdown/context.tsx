'use client'
 
import { createContext, useContext } from 'react'
 
export const MarkdownContext = createContext<Promise<unknown> | null>(null)
 
export function MarkdownProvider({
  children,
  promise,
}: {
  children: React.ReactNode
  promise: Promise<unknown>
}) {
  return (
    <MarkdownContext.Provider value={promise}>{children}</MarkdownContext.Provider>
  )
}
 
export function useMarkdownContext() {
  const context = useContext(MarkdownContext)
  if (!context) {
    throw new Error('useMarkdownContext must be used within a MarkdownProvider')
  }
  return context
}