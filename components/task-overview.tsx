import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export default async function TaskOverview() {
  // TODO: Fetch actual task statistics from the database
  const taskStats = {
    total: 10,
    completed: 5,
    inProgress: 3,
    todo: 2,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-100 rounded-full">
              <Circle className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Total Tasks</p>
              <p className="text-2xl font-bold">{taskStats.total}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-green-100 rounded-full">
              <CheckCircle2 className="text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Completed</p>
              <p className="text-2xl font-bold">{taskStats.completed}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-yellow-100 rounded-full">
              <Clock className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium">In Progress</p>
              <p className="text-2xl font-bold">{taskStats.inProgress}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-red-100 rounded-full">
              <Circle className="text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium">To Do</p>
              <p className="text-2xl font-bold">{taskStats.todo}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}