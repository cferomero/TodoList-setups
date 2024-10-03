"use client"

import { useState } from "react"
import TaskList from "@/components/TaskList"
import TaskForm from "@/components/TaskForm"
import TaskStatistics from "@/components/TaskStatistics"

export default function Dashboard() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask, status: "todo" }])
  }

  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Todo Dashboard</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onUpdateStatus={updateTaskStatus} onDeleteTask={deleteTask} />
      <TaskStatistics tasks={tasks} />
    </div>
  )
}