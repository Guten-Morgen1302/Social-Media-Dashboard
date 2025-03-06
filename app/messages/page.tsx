"use client"

import type React from "react"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import Image from "next/image"

type Contact = {
  id: number
  name: string
  avatar: string
  platform: string
  lastMessage: string
  time: string
  unread: number
  isOnline: boolean
}

type Message = {
  id: number
  text: string
  sender: "me" | "them"
  time: string
  status?: "sent" | "delivered" | "read"
}

export default function Messages() {
  const [activeContactId, setActiveContactId] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      platform: "facebook",
      lastMessage: "Thanks for the quick response!",
      time: "10:35 AM",
      unread: 2,
      isOnline: true,
    },
    {
      id: 2,
      name: "Alex Martin",
      avatar: "https://i.pravatar.cc/150?img=2",
      platform: "instagram",
      lastMessage: "When will the new collection be available?",
      time: "Yesterday",
      unread: 0,
      isOnline: false,
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/150?img=3",
      platform: "twitter",
      lastMessage: "I love the design! Could you share more details?",
      time: "Yesterday",
      unread: 0,
      isOnline: true,
    },
    {
      id: 4,
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?img=4",
      platform: "linkedin",
      lastMessage: "Would love to collaborate on this project.",
      time: "Sep 10",
      unread: 0,
      isOnline: false,
    },
    {
      id: 5,
      name: "Olivia Davis",
      avatar: "https://i.pravatar.cc/150?img=5",
      platform: "facebook",
      lastMessage: "Is there a discount for bulk orders?",
      time: "Sep 9",
      unread: 0,
      isOnline: false,
    },
  ]

  const messages: Message[] = [
    { id: 1, text: "Hi there! I have a question about your latest post.", sender: "them", time: "10:15 AM" },
    { id: 2, text: "Of course! What would you like to know?", sender: "me", time: "10:17 AM", status: "read" },
    {
      id: 3,
      text: "I was wondering if the product shown in your post is available for purchase yet?",
      sender: "them",
      time: "10:20 AM",
    },
    {
      id: 4,
      text: 'Yes, it\'s available now! You can find it on our website under the "New Arrivals" section.',
      sender: "me",
      time: "10:22 AM",
      status: "read",
    },
    { id: 5, text: "Do you offer international shipping?", sender: "them", time: "10:25 AM" },
    {
      id: 6,
      text: "Yes, we ship worldwide! Shipping costs depend on your location, but you can see the exact amount during checkout.",
      sender: "me",
      time: "10:30 AM",
      status: "read",
    },
    { id: 7, text: "That sounds great! Thanks for the quick response!", sender: "them", time: "10:35 AM" },
  ]

  const activeContact = contacts.find((contact) => contact.id === activeContactId)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      alert(`Message sent: ${newMessage}`)
      setNewMessage("")
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <i className="fa-brands fa-facebook text-[#3b5998]"></i>
      case "instagram":
        return <i className="fa-brands fa-instagram text-[#C13584]"></i>
      case "twitter":
        return <i className="fa-brands fa-twitter text-[#1DA1F2]"></i>
      case "linkedin":
        return <i className="fa-brands fa-linkedin text-[#0077B5]"></i>
      default:
        return <i className="fa-brands fa-facebook text-[#3b5998]"></i>
    }
  }

  return (
    <PageLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Messages</h2>
        <p className="text-gray-600">Manage conversations from all your social media platforms in one place.</p>
      </div>

      <div className="flex h-[calc(100vh-220px)] bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
        <div className="w-80 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 material-symbols-outlined">
                search
              </span>
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100%-73px)]">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-3 border-b border-gray-100 flex items-center gap-3 cursor-pointer transition-all ${
                  activeContactId === contact.id ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveContactId(contact.id)}
              >
                <div className="relative">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={contact.avatar || "/placeholder.svg"}
                      alt={contact.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  {contact.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium truncate">{contact.name}</h3>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="flex-shrink-0">{getPlatformIcon(contact.platform)}</span>
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                  </div>
                </div>

                {contact.unread > 0 && (
                  <span className="w-5 h-5 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center flex-shrink-0">
                    {contact.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {activeContact && (
            <>
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={activeContact.avatar || "/placeholder.svg"}
                        alt={activeContact.name}
                        className="object-cover"
                        fill
                      />
                    </div>
                    {activeContact.isOnline && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-medium">{activeContact.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      {getPlatformIcon(activeContact.platform)}
                      <span>{activeContact.isOnline ? "Online" : "Offline"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
                    <span className="material-symbols-outlined text-gray-500">phone</span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
                    <span className="material-symbols-outlined text-gray-500">videocam</span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
                    <span className="material-symbols-outlined text-gray-500">more_vert</span>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                    {message.sender === "them" && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src={activeContact.avatar || "/placeholder.svg"}
                          alt={activeContact.name}
                          className="object-cover"
                          fill
                        />
                      </div>
                    )}

                    <div
                      className={`max-w-[70%] ${
                        message.sender === "me"
                          ? "bg-blue-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                          : "bg-gray-200 text-gray-800 rounded-tl-lg rounded-tr-lg rounded-br-lg"
                      } p-3`}
                    >
                      <p>{message.text}</p>
                      <div
                        className={`text-xs mt-1 flex justify-end items-center gap-1 ${
                          message.sender === "me" ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {message.time}
                        {message.sender === "me" && message.status && (
                          <span className="material-symbols-outlined text-xs">
                            {message.status === "sent" ? "check" : message.status === "delivered" ? "done" : "done_all"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <button type="button" className="p-2 rounded-full hover:bg-gray-100 transition-all">
                    <span className="material-symbols-outlined text-gray-500">add_circle</span>
                  </button>
                  <button type="button" className="p-2 rounded-full hover:bg-gray-100 transition-all">
                    <span className="material-symbols-outlined text-gray-500">mood</span>
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
                    disabled={!newMessage.trim()}
                  >
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

