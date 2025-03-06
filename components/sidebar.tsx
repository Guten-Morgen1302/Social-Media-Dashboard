"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const isActiveLink = (path: string) => {
    return pathname === path
  }

  return (
    <div className="w-64 bg-white shadow-lg z-10 transition-all duration-300 hover:shadow-xl h-screen">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-600">dashboard</span> SocialDash
        </h1>
      </div>

      <div className="mt-4">
        <ul>
          <li>
            <Link
              href="/"
              className={`px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                isActiveLink("/") ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" : "hover:bg-gray-100"
              } cursor-pointer`}
            >
              <span className="material-symbols-outlined">dashboard</span> Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/scheduler"
              className={`px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                isActiveLink("/scheduler") ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" : "hover:bg-gray-100"
              } cursor-pointer`}
            >
              <span className="material-symbols-outlined">schedule</span> Post Scheduler
            </Link>
          </li>
          <li>
            <Link
              href="/analytics"
              className={`px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                isActiveLink("/analytics") ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" : "hover:bg-gray-100"
              } cursor-pointer`}
            >
              <span className="material-symbols-outlined">analytics</span> Analytics
            </Link>
          </li>
          <li>
            <Link
              href="/messages"
              className={`px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                isActiveLink("/messages") ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" : "hover:bg-gray-100"
              } cursor-pointer`}
            >
              <span className="material-symbols-outlined">forum</span> Messages
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className={`px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                isActiveLink("/settings") ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" : "hover:bg-gray-100"
              } cursor-pointer`}
            >
              <span className="material-symbols-outlined">settings</span> Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 px-4">
        <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Connected Accounts</p>
        <ul>
          <li className="py-2 flex items-center gap-2 transition-all duration-200 hover:text-blue-600 cursor-pointer">
            <i className="fa-brands fa-facebook text-[#3b5998] text-xl"></i> Facebook
          </li>
          <li className="py-2 flex items-center gap-2 transition-all duration-200 hover:text-blue-600 cursor-pointer">
            <i className="fa-brands fa-twitter text-[#1DA1F2] text-xl"></i> Twitter
          </li>
          <li className="py-2 flex items-center gap-2 transition-all duration-200 hover:text-blue-600 cursor-pointer">
            <i className="fa-brands fa-instagram text-[#C13584] text-xl"></i> Instagram
          </li>
          <li className="py-2 flex items-center gap-2 transition-all duration-200 hover:text-blue-600 cursor-pointer">
            <i className="fa-brands fa-linkedin text-[#0077B5] text-xl"></i> LinkedIn
          </li>
        </ul>
      </div>
    </div>
  )
}

