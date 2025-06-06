'use client'
import React from 'react'
import { Button } from './ui/button'
import BottomNav from './BottomNav'
import { ArrowLeft } from 'lucide-react'
import MiniCard from './MiniCard'
import { useRouter } from 'next/navigation'

const Order = () => {
  const router = useRouter()
  return (
    <section className='bg-[#1f1f1f93] overflow-hidden h-[calc(100vh-5rem)]  text-white'>
      <div className='flex justify-between items-center p-2 '>
        <div className='flex items-center gap-4'>
          <Button onClick={()=>router.back()}>
            <ArrowLeft />
          </Button>
          <h1 className='font-bold text-xl'>Order</h1>
        </div>
        <div className='flex gap-4'>
          <Button variant={'secondary'}>All</Button>
          <Button variant={'secondary'}>In Progress</Button>
          <Button variant={'secondary'}>Ready</Button>
          <Button variant={'secondary'}>Completed</Button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center p-2 gap-4 h-[calc(100vh-5rem-7rem)] overflow-y-auto scrollbar-hidden'>
        <MiniCard />
      </div>
      <BottomNav />
    </section>
  )
}

export default Order