import Image from "next/image"

export default function TopPosts() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 mb-8 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Top Performing Posts</h3>
        <button className="text-blue-600 flex items-center gap-1 hover:underline transition-all">
          <span>View All</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.02]">
          <div className="relative w-full h-40">
            <Image src="https://source.unsplash.com/random/400x300?nature" alt="Post" className="object-cover" fill />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-1 mb-2">
              <i className="fa-brands fa-instagram text-pink-600"></i>
              <span className="text-xs text-gray-500">Instagram • 3 days ago</span>
            </div>
            <p className="text-sm font-medium mb-3">
              Exploring the beautiful landscapes of Norway this summer! What&apos;s your favorite travel destination?
            </p>
            <div className="flex justify-between text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">favorite</span>
                <span>1,245</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">comment</span>
                <span>86</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">share</span>
                <span>32</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.02]">
          <div className="relative w-full h-40">
            <Image src="https://source.unsplash.com/random/400x300?business" alt="Post" className="object-cover" fill />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-1 mb-2">
              <i className="fa-brands fa-linkedin text-blue-700"></i>
              <span className="text-xs text-gray-500">LinkedIn • 1 week ago</span>
            </div>
            <p className="text-sm font-medium mb-3">
              Excited to announce our company&apos;s new sustainability initiative! 🌱 #Sustainability #GreenBusiness
            </p>
            <div className="flex justify-between text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">thumb_up</span>
                <span>874</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">comment</span>
                <span>52</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">share</span>
                <span>28</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.02]">
          <div className="relative w-full h-40">
            <Image
              src="https://source.unsplash.com/random/400x300?technology"
              alt="Post"
              className="object-cover"
              fill
            />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-1 mb-2">
              <i className="fa-brands fa-facebook text-blue-600"></i>
              <span className="text-xs text-gray-500">Facebook • 5 days ago</span>
            </div>
            <p className="text-sm font-medium mb-3">
              Our new product launch was a huge success! Thank you to everyone who participated! 🚀
            </p>
            <div className="flex justify-between text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">thumb_up</span>
                <span>945</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">comment</span>
                <span>67</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">share</span>
                <span>43</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

