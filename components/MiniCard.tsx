import React from 'react'
import { Card, CardDescription, CardTitle } from './ui/card'
import { CheckCircle } from 'lucide-react'

const MiniCard = () => {
  return (
    <Card className="bg-[#1C1C1C] text-white w-md h-fit px-6 py-4 rounded-xl shadow-lg">
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
          <hr className='w-full h-0.5' />
          <div className='flex items-center justify-between'>
            <h1 className='font-bold text-2xl'>Total</h1>
            <h1 className='font-bold text-2xl'>$550</h1>
          </div>
        </Card>
  )
}

export default MiniCard