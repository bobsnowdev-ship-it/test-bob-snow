'use client';

import { useState } from 'react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '24,532', change: '+12.5%', color: 'text-blue-600' },
    { label: 'Active Sessions', value: '1,432', change: '+8.3%', color: 'text-green-600' },
    { label: 'Revenue', value: '$89,432', change: '+23.1%', color: 'text-purple-600' },
    { label: 'Bounce Rate', value: '2.4%', change: '-0.8%', color: 'text-red-600' },
  ];

  const activities = [
    { user: 'Alice Johnson', action: 'Created new project', time: '2 min ago', avatar: '👩' },
    { user: 'Bob Smith', action: 'Uploaded 15 files', time: '5 min ago', avatar: '👨' },
    { user: 'Carol Davis', action: 'Updated dashboard', time: '12 min ago', avatar: '👩' },
    { user: 'David Wilson', action: 'Shared document', time: '1 hour ago', avatar: '👨' },
    { user: 'Emma Brown', action: 'Sent email blast', time: '2 hours ago', avatar: '👩' },
  ];

  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 89 },
    { month: 'Mar', value: 74 },
    { month: 'Apr', value: 92 },
    { month: 'May', value: 108 },
    { month: 'Jun', value: 125 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-purple-300">Welcome back, Bob! Here's your overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-medium text-gray-400`}>{stat.label}</span>
                <span className={`text-lg font-bold ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
              <div className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-6">Performance Chart</h2>
            <div className="space-y-4">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-12">{item.month}</span>
                  <div className="flex-1 bg-white/10 rounded-lg h-8 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transition-all duration-500"
                      style={{ width: `${(item.value / 125) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-purple-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Create New Project
              </button>
              <button className="w-full bg-white/10 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
                Upload Files
              </button>
              <button className="w-full bg-white/10 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
                Send Notification
              </button>
              <button className="w-full bg-white/10 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
                Generate Report
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <span className="text-2xl" role="img" aria-label="Avatar">
                  {activity.avatar}
                </span>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-gray-400 text-sm">{activity.user}</p>
                </div>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          Built by Bob Snow • {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
