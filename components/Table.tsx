'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Table = () => {
    const [option, setOption] = useState('all')
    const router = useRouter()
    return (
        <section className='bg-[#1f1f1f93] overflow-hidden h-[calc(100vh-5rem)]  text-white'>
            <div className='flex justify-between items-center p-2 '>
                <div className='flex items-center gap-4'>
                    <Button onClick={() => router.back()}>
                        <ArrowLeft />
                    </Button>
                    <h1 className='font-bold text-xl'>Table</h1>
                </div>
                <div className='flex gap-4'>
                    <Button onClick={()=>setOption('all')} className={`${option === 'all'&& 'bg-zinc-600'}`}>All</Button>
                    <Button onClick={()=>setOption('booked')} className={`${option === 'booked'&& 'bg-zinc-600'}`}>Booked</Button>
                </div>
            </div>

        </section>
    )
}

export default Table