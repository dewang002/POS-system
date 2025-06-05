import React from 'react'
import { Button } from './ui/button'
import BottomNav from './BottomNav'

const Order = () => {
  return (
    <section className='bg-[#1f1f1f93] overflow-hidden h-[clac(100vh-5rem)] text-white'>
        <div className='flex justify-between items-center p-2 '>
            <h1>Order</h1>
            <div className='flex gap-4'>
                <Button variant={'secondary'}>All</Button>
                <Button variant={'secondary'}>In Progress</Button>
                <Button variant={'secondary'}>Ready</Button>
                <Button variant={'secondary'}>Completed</Button>
            </div>
        </div>
        <BottomNav />
    </section>
  )
}

export default Order