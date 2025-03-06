"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import Image from "next/image"

export default function Settings() {
  const [activeSection, setActiveSection] = useState("account")

  return (
    <PageLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Settings</h2>
        <p className="text-gray-600">Manage your account and preferences.</p>
      </div>

      <div className="flex gap-6">
        <div className="w-64 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold">Settings Menu</h3>
          </div>
          <div className="p-4 space-y-1">
            <button
              className={`w-full text-left py-2 px-3 rounded-lg flex items-center gap-2 transition-all ${
                activeSection === "account" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("account")}
            >
              <span className="material-symbols-outlined">person</span>
              Account
            </button>
            <button
              className={`w-full text-left py-2 px-3 rounded-lg flex items-center gap-2 transition-all ${
                activeSection === "security" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("security")}
            >
              <span className="material-symbols-outlined">security</span>
              Security
            </button>
            <button
              className={`w-full text-left py-2 px-3 rounded-lg flex items-center gap-2 transition-all ${
                activeSection === "notifications" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("notifications")}
            >
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </button>
            <button
              className={`w-full text-left py-2 px-3 rounded-lg flex items-center gap-2 transition-all ${
                activeSection === "integrations" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("integrations")}
            >
              <span className="material-symbols-outlined">integration_instructions</span>
              Integrations
            </button>
            <button
              className={`w-full text-left py-2 px-3 rounded-lg flex items-center gap-2 transition-all ${
                activeSection === "billing" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection("billing")}
            >
              <span className="material-symbols-outlined">payments</span>
              Billing
            </button>
          </div>
        </div>

        <div className="flex-1">
          {activeSection === "account" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">person</span> Account Information
              </h2>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src="https://randomuser.me/api/portraits/men/43.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                        width={128}
                        height={128}
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all cursor-pointer">
                      <span className="material-symbols-outlined text-white">photo_camera</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="john@socialdash.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Bio</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                      defaultValue="Social media manager with 5+ years of experience. Passionate about creating engaging content and growing audiences."
                    ></textarea>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="material-symbols-outlined mr-1 text-sm">check_circle</span> Account active
                        since Jan 12, 2023
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-all font-medium">
                        Deactivate Account
                      </button>
                      <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "integrations" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">integration_instructions</span> Social Media
                Integrations
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <i className="fa-brands fa-facebook text-[#1877F2] text-2xl mr-3"></i>
                        <h3 className="font-medium">Facebook</h3>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="flex items-center text-green-600 font-medium">
                          <span className="material-symbols-outlined mr-1 text-sm">check_circle</span> Connected
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Connected as John Doe</div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">Last synced: Today, 10:23 AM</div>
                      <button className="text-red-600 text-sm font-medium hover:underline">Disconnect</button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <i className="fa-brands fa-instagram text-[#E1306C] text-2xl mr-3"></i>
                        <h3 className="font-medium">Instagram</h3>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="flex items-center text-green-600 font-medium">
                          <span className="material-symbols-outlined mr-1 text-sm">check_circle</span> Connected
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Connected as @johndoe_design</div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">Last synced: Yesterday, 3:15 PM</div>
                      <button className="text-red-600 text-sm font-medium hover:underline">Disconnect</button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <i className="fa-brands fa-twitter text-[#1DA1F2] text-2xl mr-3"></i>
                        <h3 className="font-medium">Twitter</h3>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="flex items-center text-green-600 font-medium">
                          <span className="material-symbols-outlined mr-1 text-sm">check_circle</span> Connected
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Connected as @johndoe</div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">Last synced: Oct 20, 2023, 5:47 PM</div>
                      <button className="text-red-600 text-sm font-medium hover:underline">Disconnect</button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <i className="fa-brands fa-linkedin text-[#0A66C2] text-2xl mr-3"></i>
                        <h3 className="font-medium">LinkedIn</h3>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="flex items-center text-gray-600 font-medium">
                          <span className="material-symbols-outlined mr-1 text-sm">add_circle</span> Not Connected
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Connect your LinkedIn account</div>
                    <div className="flex justify-end">
                      <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "security" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">security</span> Security & Authentication
              </h2>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value="••••••••"
                      />
                    </div>
                    <div></div>
                    <div>
                      <label className="block text-sm font-medium mb-1">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium">Enable</span>
                      </label>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Two-factor authentication adds an extra layer of security to your account. When enabled, you&apos;ll
                    need to enter a code from your authenticator app when signing in.
                  </p>
                  <div className="text-sm text-gray-500 flex items-center">
                    <span className="material-symbols-outlined mr-1 text-sm">info</span> You&apos;ll need an
                    authenticator app like Google Authenticator or Authy.
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Recent Login Activity</h3>
                    <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
                      <div className="flex items-center">
                        <span className="material-symbols-outlined mr-3 text-green-500">computer</span>
                        <div>
                          <div className="font-medium">MacBook Pro - Chrome</div>
                          <div className="text-sm text-gray-500">New York, USA (192.168.1.1) - Current session</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Just now</div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-all">
                      <div className="flex items-center">
                        <span className="material-symbols-outlined mr-3">smartphone</span>
                        <div>
                          <div className="font-medium">iPhone 13 - Safari</div>
                          <div className="text-sm text-gray-500">New York, USA (192.168.0.5)</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Yesterday, 9:41 PM</div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-all">
                      <div className="flex items-center">
                        <span className="material-symbols-outlined mr-3">computer</span>
                        <div>
                          <div className="font-medium">Windows PC - Firefox</div>
                          <div className="text-sm text-gray-500">Boston, USA (192.168.2.8)</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Oct 21, 2023, 3:15 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "notifications" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">notifications</span> Notification Settings
              </h2>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium mb-4">Notification Delivery</h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-all cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded mr-3"
                        defaultChecked
                      />
                      <div>
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-gray-500">Receive notifications via email</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-all cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded mr-3"
                        defaultChecked
                      />
                      <div>
                        <div className="font-medium">Push Notifications</div>
                        <div className="text-sm text-gray-500">Receive notifications on your device</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-all cursor-pointer">
                      <input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded mr-3" />
                      <div>
                        <div className="font-medium">SMS Notifications</div>
                        <div className="text-sm text-gray-500">Receive notifications via text message</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Notification Types</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <div className="font-medium">Post Scheduling</div>
                        <div className="text-sm text-gray-500">
                          Get notified when posts are scheduled, published, or fail
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-3 border-t border-gray-100">
                      <div>
                        <div className="font-medium">Direct Messages</div>
                        <div className="text-sm text-gray-500">Get notified when you receive direct messages</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-3 border-t border-gray-100">
                      <div>
                        <div className="font-medium">Comments & Replies</div>
                        <div className="text-sm text-gray-500">Get notified about comments on your posts</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-3 border-t border-gray-100">
                      <div>
                        <div className="font-medium">New Followers</div>
                        <div className="text-sm text-gray-500">Get notified when someone follows you</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-3 border-t border-gray-100">
                      <div>
                        <div className="font-medium">Analytics Reports</div>
                        <div className="text-sm text-gray-500">Get weekly/monthly analytics reports</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "billing" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">payments</span> Billing & Subscription
              </h2>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Current Plan</h3>
                  <span className="bg-blue-100 text-blue-600 text-sm py-1 px-3 rounded-full">Professional</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Professional Plan</span>
                    <span className="text-xl font-bold">
                      $29.99<span className="text-gray-500 text-sm font-normal">/month</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Your next billing date is November 15, 2023</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      <span>Up to 10 social accounts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      <span>Advanced analytics</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      <span>Unlimited scheduled posts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      <span>Priority support</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                      Change Plan
                    </button>
                    <button className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-all">
                      Cancel Subscription
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <i className="fa-brands fa-cc-visa text-blue-700 text-2xl"></i>
                    </div>
                    <div>
                      <div className="font-medium">Visa ending in 4242</div>
                      <div className="text-sm text-gray-500">Expires 05/2025</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm text-red-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                      Remove
                    </button>
                  </div>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  <span className="material-symbols-outlined">add</span>
                  Add Payment Method
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

