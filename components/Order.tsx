import React from 'react'
import { Button } from './ui/button'
import BottomNav from './BottomNav'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { CheckCircle } from 'lucide-react'

const Order = () => {
  return (
    <section className='bg-[#1f1f1f93] overflow-hidden h-[calc(100vh-5rem)] text-white'>
      <div className='flex justify-between items-center p-2 '>
        <h1>Order</h1>
        <div className='flex gap-4'>
          <Button variant={'secondary'}>All</Button>
          <Button variant={'secondary'}>In Progress</Button>
          <Button variant={'secondary'}>Ready</Button>
          <Button variant={'secondary'}>Completed</Button>
        </div>
      </div>
      <>
        <Card className="bg-[#1C1C1C] text-white w-sm px-6 py-4 rounded-xl shadow-lg">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="bg-yellow-400 text-black font-bold w-12 h-12 flex items-center justify-center rounded-md">
                AM
              </div>
              <div className="flex flex-col">
                <CardTitle className="text-base">Amrit Raj</CardTitle>
                <CardDescription className="text-sm text-gray-400">#101 / Dine in</CardDescription>
              </div>
            </div>

            <div className="flex flex-col items-end text-green-400 space-y-1">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-500">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                <span>Ready to serve</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
            <p>January 18, 2025 08:32 PM</p>
            <span className="text-gray-400">8 Items</span>
          </div>
        </Card>
      </>
      <BottomNav />
    </section>
  )
}

export default Order