"use client"

import type React from "react"

import Sidebar from "./sidebar"
import Header from "./header"

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

