"use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

interface Task {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "completed";
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Complete project proposal", status: "todo" },
    { id: 2, title: "Review client feedback", status: "in-progress" },
    { id: 3, title: "Update documentation", status: "completed" },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTask, status: "todo" },
      ]);
      setNewTask("");
    }
  };

  const updateStatus = (taskId: number, newStatus: "todo" | "in-progress" | "completed") => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FFE8F7] to-[#FFD6EF]">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
            Dashboard
          </h1>
          <button className="btn btn-primary">Profile Settings</button>
        </div>

        {/* Task Management Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add Task Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-1 md:col-span-3"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter task title..."
                />
                <button
                  onClick={addTask}
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
                >
                  Add Task
                </button>
              </div>
            </div>
          </motion.div>

          {/* Task Columns */}
          {["todo", "in-progress", "completed"].map((status) => (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {status === "in-progress" ? "In Progress" : status}
              </h2>
              <div className="space-y-4">
                {tasks
                  .filter((task) => task.status === status)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="bg-gray-50 rounded-lg p-4 shadow-sm"
                    >
                      <p className="font-medium mb-2">{task.title}</p>
                      <select
                        value={task.status}
                        onChange={(e) => updateStatus(task.id, e.target.value as any)}
                        className="text-sm px-2 py-1 rounded border border-gray-300"
                      >
                        <option value="todo">Todo</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
