export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 transition-all duration-300 hover:shadow-md">
      <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
      <div className="space-y-4">
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <i className="fa-brands fa-facebook text-blue-600"></i>
          </div>
          <div>
            <p className="text-sm">
              Your post received <span className="font-semibold">240 likes</span> on Facebook
            </p>
            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
            <i className="fa-brands fa-instagram text-pink-600"></i>
          </div>
          <div>
            <p className="text-sm">
              You gained <span className="font-semibold">46 new followers</span> on Instagram
            </p>
            <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <i className="fa-brands fa-twitter text-purple-600"></i>
          </div>
          <div>
            <p className="text-sm">
              Your tweet was <span className="font-semibold">retweeted 18 times</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Yesterday</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <i className="fa-brands fa-linkedin text-blue-700"></i>
          </div>
          <div>
            <p className="text-sm">
              Your article has <span className="font-semibold">320 views</span> on LinkedIn
            </p>
            <p className="text-xs text-gray-500 mt-1">2 days ago</p>
          </div>
        </div>
      </div>
      <button className="w-full mt-4 py-2 text-blue-600 text-sm border border-blue-200 rounded-lg hover:bg-blue-50 transition-all">
        View All Activity
      </button>
    </div>
  )
}

