import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export default async function RecentTasks() {
  // TODO: Fetch actual recent tasks from the database
  const recentTasks = [
    { id: 1, title: "Complete project proposal", status: "todo" },
    { id: 2, title: "Review team performance", status: "in-progress" },
    { id: 3, title: "Update client documentation", status: "completed" },
    { id: 4, title: "Prepare for quarterly meeting", status: "todo" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="text-green-600" />
      case "in-progress":
        return <Clock className="text-yellow-600" />
      default:
        return <Circle className="text-red-600" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentTasks.map((task) => (
            <li key={task.id} className="flex items-center space-x-3">
              {getStatusIcon(task.status)}
              <span>{task.title}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}