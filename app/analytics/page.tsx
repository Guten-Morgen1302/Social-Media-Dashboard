import PageLayout from "@/components/page-layout"
import Image from "next/image"

export default function Analytics() {
  return (
    <PageLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Analytics</h2>
        <p className="text-gray-600">Track performance metrics across all your social media platforms.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Total Reach</span>
            <span className="flex items-center gap-1 text-green-500 text-sm">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>12%</span>
            </span>
          </div>
          <p className="text-2xl font-bold mt-2">124,256</p>
          <p className="text-xs text-gray-500 mt-1">vs. 110,324 last period</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Engagement</span>
            <span className="flex items-center gap-1 text-green-500 text-sm">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>8.3%</span>
            </span>
          </div>
          <p className="text-2xl font-bold mt-2">68,472</p>
          <p className="text-xs text-gray-500 mt-1">vs. 63,210 last period</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Followers</span>
            <span className="flex items-center gap-1 text-green-500 text-sm">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>2.5%</span>
            </span>
          </div>
          <p className="text-2xl font-bold mt-2">25,842</p>
          <p className="text-xs text-gray-500 mt-1">vs. 25,211 last period</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Conversion Rate</span>
            <span className="flex items-center gap-1 text-red-500 text-sm">
              <span className="material-symbols-outlined text-sm">trending_down</span>
              <span>1.2%</span>
            </span>
          </div>
          <p className="text-2xl font-bold mt-2">3.4%</p>
          <p className="text-xs text-gray-500 mt-1">vs. 3.5% last period</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Audience Growth</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg">30 Days</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">90 Days</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">1 Year</button>
            </div>
          </div>

          <div className="h-[300px] w-full">
            <svg viewBox="0 0 800 300" className="w-full h-full">
              <path
                d="M0,280 C100,230 150,200 200,180 C250,160 300,190 350,170 C400,150 450,120 500,100 C550,80 600,70 650,60 C700,50 750,40 800,20"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
              ></path>
              <path
                d="M0,280 C100,260 150,250 200,240 C250,230 300,220 350,210 C400,200 450,190 500,180 C550,170 600,160 650,150 C700,140 750,130 800,120"
                stroke="#EC4899"
                strokeWidth="3"
                fill="none"
              ></path>
              <path
                d="M0,280 C100,275 150,270 200,265 C250,260 300,255 350,250 C400,245 450,240 500,235 C550,230 600,225 650,220 C700,215 750,210 800,200"
                stroke="#8B5CF6"
                strokeWidth="3"
                fill="none"
              ></path>
              <path
                d="M0,280 C100,270 150,260 200,255 C250,250 300,245 350,240 C400,235 450,230 500,225 C550,220 600,215 650,200 C700,190 750,170 800,150"
                stroke="#10B981"
                strokeWidth="3"
                fill="none"
              ></path>
            </svg>
          </div>

          <div className="flex justify-center gap-4 mt-1">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-xs text-gray-600">Facebook</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-pink-500"></span>
              <span className="text-xs text-gray-600">Instagram</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span className="text-xs text-gray-600">Twitter</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-xs text-gray-600">LinkedIn</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-4">Audience Demographics</h3>

          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">Age Distribution</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>18-24</span>
                  <span>24%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: "24%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>25-34</span>
                  <span>38%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: "38%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>35-44</span>
                  <span>22%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: "22%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>45-54</span>
                  <span>12%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: "12%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>55+</span>
                  <span>4%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: "4%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Gender</h4>
            <div className="flex gap-4">
              <div className="flex-1 bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-blue-500 font-bold">56%</div>
                <div className="text-xs text-gray-500">Female</div>
              </div>
              <div className="flex-1 bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-blue-500 font-bold">42%</div>
                <div className="text-xs text-gray-500">Male</div>
              </div>
              <div className="flex-1 bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-blue-500 font-bold">2%</div>
                <div className="text-xs text-gray-500">Other</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-4">Top Performing Content</h3>

          <div className="space-y-4">
            <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-all">
              <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src="https://source.unsplash.com/random/200x200?nature"
                  alt="Post"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <i className="fa-brands fa-instagram text-pink-600"></i>
                  <span className="text-xs text-gray-500">Instagram • Sep 12</span>
                </div>
                <p className="text-sm font-medium line-clamp-2">
                  Exploring the beautiful landscapes of Norway this summer! What's your favorite travel destination?
                </p>
                <div className="flex mt-2 text-xs text-gray-600 gap-3">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                    <span>2,451</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">comment</span>
                    <span>187</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">share</span>
                    <span>64</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-all">
              <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src="https://source.unsplash.com/random/200x200?business"
                  alt="Post"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <i className="fa-brands fa-linkedin text-blue-700"></i>
                  <span className="text-xs text-gray-500">LinkedIn • Sep 8</span>
                </div>
                <p className="text-sm font-medium line-clamp-2">
                  Excited to announce our company's new sustainability initiative! 🌱 #Sustainability #GreenBusiness
                </p>
                <div className="flex mt-2 text-xs text-gray-600 gap-3">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">thumb_up</span>
                    <span>1,829</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">comment</span>
                    <span>124</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">share</span>
                    <span>47</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-all">
              <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src="https://source.unsplash.com/random/200x200?technology"
                  alt="Post"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <i className="fa-brands fa-facebook text-blue-600"></i>
                  <span className="text-xs text-gray-500">Facebook • Sep 5</span>
                </div>
                <p className="text-sm font-medium line-clamp-2">
                  Our new product launch was a huge success! Thank you to everyone who participated! 🚀
                </p>
                <div className="flex mt-2 text-xs text-gray-600 gap-3">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">thumb_up</span>
                    <span>1,394</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">comment</span>
                    <span>98</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">share</span>
                    <span>52</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-4">Platform Comparison</h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-facebook text-[#3b5998] text-xl"></i>
                  <span className="font-medium">Facebook</span>
                </div>
                <div className="text-sm text-gray-500">9,234 followers</div>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="text-blue-600 font-semibold">12.4k</div>
                  <div className="text-xs text-gray-500">Reach</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="text-blue-600 font-semibold">1.8k</div>
                  <div className="text-xs text-gray-500">Engagements</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="text-blue-600 font-semibold">3.2%</div>
                  <div className="text-xs text-gray-500">CTR</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="text-blue-600 font-semibold">+124</div>
                  <div className="text-xs text-gray-500">New Followers</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-instagram text-[#C13584] text-xl"></i>
                  <span className="font-medium">Instagram</span>
                </div>
                <div className="text-sm text-gray-500">12,765 followers</div>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <div className="text-pink-600 font-semibold">26.7k</div>
                  <div className="text-xs text-gray-500">Reach</div>
                </div>
                <div className="bg-pink-100 p-2 rounded-lg">
                  <div className="text-pink-600 font-semibold">3.9k</div>
                  <div className="text-xs text-gray-500">Engagements</div>
                </div>
                <div className="bg-pink-100 p-2 rounded-lg">
                  <div className="text-pink-600 font-semibold">4.5%</div>
                  <div className="text-xs text-gray-500">CTR</div>
                </div>
                <div className="bg-pink-100 p-2 rounded-lg">
                  <div className="text-pink-600 font-semibold">+278</div>
                  <div className="text-xs text-gray-500">New Followers</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-twitter text-[#1DA1F2] text-xl"></i>
                  <span className="font-medium">Twitter</span>
                </div>
                <div className="text-sm text-gray-500">5,628 followers</div>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="text-blue-500 font-semibold">8.3k</div>
                  <div className="text-xs text-gray-500">Reach</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="text-blue-500 font-semibold">1.2k</div>
                  <div className="text-xs text-gray-500">Engagements</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="text-blue-500 font-semibold">2.8%</div>
                  <div className="text-xs text-gray-500">CTR</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="text-blue-500 font-semibold">+92</div>
                  <div className="text-xs text-gray-500">New Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

