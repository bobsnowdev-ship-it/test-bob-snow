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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0f172a, #1a1033)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        color: 'white'
      }}>
        <div style={{
          marginBottom: '2rem'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem'
          }}>Dashboard</h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.125rem'
          }}>Welcome back, Bob! Here's your overview.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: '0.875rem',
                  color: 'rgba(156, 163, 175, 0.7)'
                }}>{stat.label}</span>
                <span style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold'
                }}>
                  {stat.change}
                </span>
              </div>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold'
              }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 2fr) 1fr)',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'white'
            }}>Performance Chart</h2>
            <div style={{
              marginTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {chartData.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{
                    fontSize: '0.875rem',
                    color: 'rgba(156, 163, 175, 0.7)',
                    width: '3rem'
                  }}>{item.month}</span>
                  <div style={{
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    height: '2rem',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${(item.value / 125) * 100}%`,
                      height: '100%',
                      background: 'linear-gradient(to right, #a855f7, #ec4899)',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease-in-out'
                    }}></div>
                  </div>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    color: '#a855f7'
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'white'
            }}>Quick Actions</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <button style={{
                width: '100%',
                background: 'linear-gradient(to right, #9333ea, #ec4899)',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                fontSize: '1rem',
                cursor: 'pointer',
                border: 'none',
                transition: 'opacity 0.2s'
              }}>
                Create New Project
              </button>
              <button style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                fontSize: '1rem',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'background 0.2s'
              }}>
                Upload Files
              </button>
              <button style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                fontSize: '1rem',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'background 0.2s'
              }}>
                Send Notification
              </button>
              <button style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                fontSize: '1rem',
                cursor: "pointer",
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'background 0.2s'
              }}>
                Generate Report
              </button>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'white'
            }}>Recent Activity</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {activities.map((activity, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.5rem',
                  transition: 'background 0.2s'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{activity.avatar}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      color: 'white',
                      fontWeight: '500',
                      margin: 0
                    }}>{activity.action}</p>
                    <p style={{
                      color: 'rgba(156, 163, 175, 0.7)',
                      fontSize: '0.875rem'
                    }}>{activity.user}</p>
                  </div>
                  <span style={{
                    color: 'rgba(156, 163, 175, 0.5)',
                    fontSize: '0.875rem'
                  }}>{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          color: 'rgba(156, 163, 175, 0.5)',
          fontSize: '0.875rem'
        }}>
          Built by Bob Snow • {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
