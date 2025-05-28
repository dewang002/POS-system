"use client"

import { useEffect, useState } from "react"
import BottomNav from "./BottomNav"

const Home = () => {
    const [Datetime, setDateTime] = useState(new Date())

    useEffect(() => {
        const time = setInterval(() => setDateTime(new Date()), 1000)
    }, [])

    const formatDateTime = (date: Date) => {
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    return (
        <div className="h-screen w-full overflow-hidden ">
            <div className="flex h-full w-full">
                <div className="flex-3 flex text-white px-4 bg-zinc-800">
                    <div className="w-full ">
                        <h1 className="text-2xl font-bold">Hello, </h1>
                        <p className="text-lg text-light">Give your best services for customers 😄</p>
                    </div>
                    <div>
                        <h1>{formatDateTime(Datetime)}</h1>
                    </div>
                </div>
                <div className="flex-1 bg-pink-800">

                </div>
            </div>

            <BottomNav />
        </div>
    )
}

export default Home
