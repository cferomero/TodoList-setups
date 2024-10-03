import TaskList from "@/components/task-list"
import CreateTaskButton from "@/components/create-task-button"

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Tasks</h2>
        <CreateTaskButton />
      </div>
      <TaskList />
    </div>
  )
}