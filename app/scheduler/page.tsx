"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import Image from "next/image"

type ScheduledPost = {
  id: number
  platform: string
  content: string
  image?: string
  date: string
  time: string
  status: "scheduled" | "published" | "failed"
}

export default function PostScheduler() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "published" | "draft">("upcoming")
  const [selectedDate, setSelectedDate] = useState<string>("")

  const scheduledPosts: ScheduledPost[] = [
    {
      id: 1,
      platform: "facebook",
      content: "Excited to announce our new product launch! Join us for a live demo next week.",
      image: "https://source.unsplash.com/random/600x400?product",
      date: "2023-12-15",
      time: "13:30",
      status: "scheduled",
    },
    {
      id: 2,
      platform: "instagram",
      content: "Behind the scenes at our latest photoshoot. Can you guess the theme? 📸 #behindthescenes",
      image: "https://source.unsplash.com/random/600x400?photography",
      date: "2023-12-15",
      time: "16:00",
      status: "scheduled",
    },
    {
      id: 3,
      platform: "twitter",
      content: "What features would you like to see in our next update? Let us know in the comments below!",
      date: "2023-12-16",
      time: "09:15",
      status: "scheduled",
    },
    {
      id: 4,
      platform: "linkedin",
      content: "We're hiring! Check out our career page for exciting new opportunities in marketing and development.",
      image: "https://source.unsplash.com/random/600x400?office",
      date: "2023-12-17",
      time: "11:00",
      status: "scheduled",
    },
    {
      id: 5,
      platform: "facebook",
      content: "Tips for staying productive while working from home. What works for you?",
      date: "2023-12-18",
      time: "14:45",
      status: "scheduled",
    },
  ]

  const platformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <i className="fa-brands fa-facebook text-[#3b5998] text-xl"></i>
      case "instagram":
        return <i className="fa-brands fa-instagram text-[#C13584] text-xl"></i>
      case "twitter":
        return <i className="fa-brands fa-twitter text-[#1DA1F2] text-xl"></i>
      case "linkedin":
        return <i className="fa-brands fa-linkedin text-[#0077B5] text-xl"></i>
      default:
        return <i className="fa-brands fa-facebook text-[#3b5998] text-xl"></i>
    }
  }

  const filteredPosts = selectedDate ? scheduledPosts.filter((post) => post.date === selectedDate) : scheduledPosts

  return (
    <PageLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Post Scheduler</h2>
        <p className="text-gray-600">Plan and schedule your social media content across multiple platforms.</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === "upcoming" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming ({scheduledPosts.length})
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === "published" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => setActiveTab("published")}
          >
            Published
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === "draft" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => setActiveTab("draft")}
          >
            Drafts
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Schedule New Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-semibold">Scheduled Posts</h3>
              <div className="flex items-center gap-3">
                <input
                  type="date"
                  className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <button className="text-blue-600 hover:underline text-sm" onClick={() => setSelectedDate("")}>
                  Clear
                </button>
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="p-6 text-center">
                <span className="material-symbols-outlined text-gray-400 text-5xl">calendar_today</span>
                <p className="mt-2 text-gray-500">No posts scheduled for the selected date.</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                  Create New Post
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="p-4 hover:bg-gray-50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{platformIcon(post.platform)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{post.content}</p>
                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-sm">calendar_today</span>
                              <span>
                                {post.date}, {post.time}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 rounded-full hover:bg-gray-200 transition-all">
                              <span className="material-symbols-outlined text-gray-500">edit</span>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-200 transition-all">
                              <span className="material-symbols-outlined text-gray-500">delete</span>
                            </button>
                          </div>
                        </div>

                        {post.image && (
                          <div className="mt-3 relative h-40 rounded-lg overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt="Post image"
                              className="object-cover"
                              fill
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold">Calendar</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                <div className="text-sm text-gray-500">Sun</div>
                <div className="text-sm text-gray-500">Mon</div>
                <div className="text-sm text-gray-500">Tue</div>
                <div className="text-sm text-gray-500">Wed</div>
                <div className="text-sm text-gray-500">Thu</div>
                <div className="text-sm text-gray-500">Fri</div>
                <div className="text-sm text-gray-500">Sat</div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
                      i + 1 === 15 ? "bg-blue-100 border border-blue-300" : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-sm">{i + 1}</span>
                    {i + 1 === 15 && <div className="w-4 h-1 bg-blue-500 rounded-full mt-1"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-6">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold">Post Performance</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-sm text-gray-500">This Week</span>
                  <div className="text-2xl font-bold">15 Posts</div>
                </div>
                <div className="flex items-center text-green-500">
                  <span className="material-symbols-outlined">trending_up</span>
                  <span className="ml-1">+20%</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Facebook</span>
                    <span className="text-sm">5 posts</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Instagram</span>
                    <span className="text-sm">7 posts</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-pink-500 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Twitter</span>
                    <span className="text-sm">3 posts</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-400 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

