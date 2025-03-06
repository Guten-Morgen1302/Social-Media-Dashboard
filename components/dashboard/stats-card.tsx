type StatsCardProps = {
  title: string
  value: string
  trend: string
  trendValue: string
  icon: string
  iconBg: string
  iconColor: string
}

export default function StatsCard({ title, value, trend, trendValue, icon, iconBg, iconColor }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 font-medium">{title}</h3>
        <span className={`material-symbols-outlined ${iconColor} ${iconBg} p-2 rounded-full`}>{icon}</span>
      </div>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <div
        className={`mt-3 flex items-center ${trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-600"}`}
      >
        <span className="material-symbols-outlined">
          {trend === "up" ? "trending_up" : trend === "down" ? "trending_down" : "calendar_month"}
        </span>
        <span className="text-sm ml-1">{trendValue}</span>
      </div>
    </div>
  )
}

