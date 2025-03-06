import PageLayout from "@/components/page-layout"
import StatsCard from "@/components/dashboard/stats-card"
import AudienceChart from "@/components/dashboard/audience-chart"
import RecentActivity from "@/components/dashboard/recent-activity"
import TopPosts from "@/components/dashboard/top-posts"
import PostCreator from "@/components/dashboard/post-creator"

export default function Dashboard() {
  return (
    <PageLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
        <p className="text-gray-600">
          Welcome back, John! Here&apos;s what&apos;s happening across your social accounts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Followers"
          value="25,842"
          trend="up"
          trendValue="+2.4% from last month"
          icon="group"
          iconBg="bg-blue-100"
          iconColor="text-blue-500"
        />
        <StatsCard
          title="Engagement Rate"
          value="4.7%"
          trend="down"
          trendValue="-0.5% from last month"
          icon="thumb_up"
          iconBg="bg-purple-100"
          iconColor="text-purple-500"
        />
        <StatsCard
          title="Scheduled Posts"
          value="12"
          trend="calendar"
          trendValue="Next: Today, 2:30 PM"
          icon="schedule"
          iconBg="bg-amber-100"
          iconColor="text-amber-500"
        />
        <StatsCard
          title="New Messages"
          value="24"
          trend="calendar"
          trendValue="View all messages"
          icon="chat"
          iconBg="bg-green-100"
          iconColor="text-green-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AudienceChart />
        <RecentActivity />
      </div>

      <TopPosts />

      <PostCreator />
    </PageLayout>
  )
}

