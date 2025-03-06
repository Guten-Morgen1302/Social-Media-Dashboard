"use client"

import { useState } from "react"

export default function PostCreator() {
  const [postContent, setPostContent] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState(["facebook", "twitter", "instagram"])

  const removePlatform = (platform: string) => {
    setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform))
  }

  const addPlatform = () => {
    // In a real app, this would show a platform selection modal
    alert("In a real app, this would show a platform selection modal")
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 transition-all duration-300 hover:shadow-md">
      <h3 className="font-semibold text-lg mb-4">Create New Post</h3>

      <div className="mb-4">
        <textarea
          placeholder="What's on your mind?"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none h-24"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedPlatforms.includes("facebook") && (
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-sm">
            <i className="fa-brands fa-facebook text-blue-600"></i>
            <span>Facebook</span>
            <span
              className="material-symbols-outlined text-gray-500 text-sm cursor-pointer hover:text-gray-700"
              onClick={() => removePlatform("facebook")}
            >
              close
            </span>
          </div>
        )}

        {selectedPlatforms.includes("twitter") && (
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-sm">
            <i className="fa-brands fa-twitter text-blue-400"></i>
            <span>Twitter</span>
            <span
              className="material-symbols-outlined text-gray-500 text-sm cursor-pointer hover:text-gray-700"
              onClick={() => removePlatform("twitter")}
            >
              close
            </span>
          </div>
        )}

        {selectedPlatforms.includes("instagram") && (
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-sm">
            <i className="fa-brands fa-instagram text-pink-600"></i>
            <span>Instagram</span>
            <span
              className="material-symbols-outlined text-gray-500 text-sm cursor-pointer hover:text-gray-700"
              onClick={() => removePlatform("instagram")}
            >
              close
            </span>
          </div>
        )}

        <button
          className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-50 transition-all"
          onClick={addPlatform}
        >
          <span className="material-symbols-outlined text-gray-500 text-sm">add</span>
          <span>Add Platform</span>
        </button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
            <span className="material-symbols-outlined">image</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
            <span className="material-symbols-outlined">videocam</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
            <span className="material-symbols-outlined">schedule</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
            <span className="material-symbols-outlined">tag</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
            <span className="material-symbols-outlined">location_on</span>
          </button>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
            Save Draft
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Publish Now
          </button>
        </div>
      </div>
    </div>
  )
}

