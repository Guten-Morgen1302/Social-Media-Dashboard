"use client"

import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="bg-white p-4 border-b border-gray-200 flex justify-between items-center shadow-sm">
      <div className="relative w-64">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 material-symbols-outlined">
          search
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition-all"
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>

          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-20 group-open:animate-fadeIn">
              <div className="p-3 border-b border-gray-200">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                <div className="p-3 border-b border-gray-100 hover:bg-gray-50 transition-all cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 bg-blue-100 p-2 rounded-full">
                      schedule
                    </span>
                    <div>
                      <p className="text-sm">Your post is scheduled to go live in 30 minutes</p>
                      <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-b border-gray-100 hover:bg-gray-50 transition-all cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 bg-green-100 p-2 rounded-full">
                      thumb_up
                    </span>
                    <div>
                      <p className="text-sm">Your post received 150 likes on Instagram</p>
                      <p className="text-xs text-gray-500 mt-1">45 minutes ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 hover:bg-gray-50 transition-all cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-purple-500 bg-purple-100 p-2 rounded-full">
                      comment
                    </span>
                    <div>
                      <p className="text-sm">12 new comments on your LinkedIn post</p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 text-center border-t border-gray-200">
                <button className="text-blue-600 text-sm hover:underline">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <Image
              src="https://i.pravatar.cc/40?img=12"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              width={32}
              height={32}
            />
            <span>Harsh Patil</span>
            <span className="material-symbols-outlined text-gray-500">expand_more</span>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 group-open:animate-fadeIn">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">person</span> Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">settings</span> Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-all flex items-center gap-2 text-red-500">
                  <span className="material-symbols-outlined">logout</span> Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
      </div>
    </header>
  )
}

