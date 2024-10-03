import TaskOverview from "@/components/task-overview"
import RecentTasks from "@/components/recent-tasks"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Welcome to Your Dashboard</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <TaskOverview />
        <RecentTasks />
      </div>
    </div>
  )
}