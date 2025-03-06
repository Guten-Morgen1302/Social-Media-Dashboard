export default function AudienceChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 col-span-2 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Audience Growth</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-lg bg-blue-100 text-blue-600 text-sm transition-all hover:bg-blue-200">
            Last 7 Days
          </button>
          <button className="px-3 py-1 rounded-lg text-gray-500 text-sm transition-all hover:bg-gray-100">
            Last 30 Days
          </button>
          <button className="px-3 py-1 rounded-lg text-gray-500 text-sm transition-all hover:bg-gray-100">
            Last 90 Days
          </button>
        </div>
      </div>

      <div className="h-64 w-full">
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
  )
}

