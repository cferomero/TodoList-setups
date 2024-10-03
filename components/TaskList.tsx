import { Task } from "@/types/task"

interface TaskListProps {
  tasks: Task[]
  onUpdateStatus: (id: number, status: string) => void
  onDeleteTask: (id: number) => void
}

export default function TaskList({ tasks, onUpdateStatus, onDeleteTask }: TaskListProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between p-2 bg-white shadow rounded">
            <span className={task.status === "completed" ? "line-through" : ""}>{task.title}</span>
            <div>
              <select
                value={task.status}
                onChange={(e) => onUpdateStatus(task.id, e.target.value)}
                className="mr-2 p-1 border rounded"
              >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}