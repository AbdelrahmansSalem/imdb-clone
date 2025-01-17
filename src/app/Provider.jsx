'use client'
import { ThemeProvider } from "next-themes"

export default function Provider({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        <div className="font-bold text-gray-700 dark:text-gray-200 dark:bg-gray-700
        bg-gray-200 min-h-screen transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
  )
}
