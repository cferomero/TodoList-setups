import { Task } from "@/types/task"

interface TaskStatisticsProps {
  tasks: Task[]
}

export default function TaskStatistics({ tasks }: TaskStatisticsProps) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.status === "completed").length
  const inProgressTasks = tasks.filter(task => task.status === "in-progress").length
  const todoTasks = tasks.filter(task => task.status === "todo").length

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Task Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-medium">Total Tasks</h3>
          <p className="text-3xl font-bold">{totalTasks}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-medium">Completed</h3>
          <p className="text-3xl font-bold">{completedTasks}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-medium">In Progress</h3>
          <p className="text-3xl font-bold">{inProgressTasks}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-lg font-medium">Todo</h3>
          <p className="text-3xl font-bold">{todoTasks}</p>
        </div>
      </div>
    </div>
  )
}