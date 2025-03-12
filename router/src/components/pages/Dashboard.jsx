import React from 'react'

const Dashboard = ({ dashboard }) => {
  return (
    <div className='h-screen w-screen flex flex-wrap justify-center items-center gap-6 bg-gray-100 p-6'>
      {dashboard.map((dashboard, index) => (
        <div key={index} className='w-64 p-6 bg-slate-400 text-white rounded-lg shadow-lg text-center'>
          <h1 className='text-2xl font-bold'>{dashboard.name}</h1>
          <p className='text-lg'>{dashboard.email}</p>
          <p className='text-lg'>Age: {dashboard.age}</p>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
