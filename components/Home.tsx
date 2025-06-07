"use client"

import { useEffect, useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card"
import {
  Banknote,
  TimerIcon,
  CheckCheck,
  Circle,
} from "lucide-react"
import Image from "next/image"

const Home = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDateTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const cardDetail = [
    {
      title: "Total Earnings",
      icon: Banknote,
      color: "green",
      number: 512,
      textColor: "text-green-600",
      profit: "then yesterday",
    },
    {
      title: "In Progress",
      icon: TimerIcon,
      color: "yellow",
      number: 16,
      textColor: "text-green-600",
      profit: "then yesterday",
    },
  ]

  return (
    <div className="w-full h-screen overflow-hidden pb-20 bg-zinc-800">
      <div className="flex w-full">
        <div className="flex-3 text-white px-4  min-h-screen">
          <div className="w-full mb-8 flex justify-between">
            <div>
              <h1 className="text-2xl font-bold">Hello, </h1>
              <p className="text-lg text-light">
                Give your best services for customers 😄
              </p>
            </div>
            <div>
              <h1 className="text-xl">{formatDateTime(dateTime)}</h1>
            </div>
          </div>

          <div className="lg:flex gap-2 mb-6">
            {cardDetail.map((elem, index) => (
              <Card
                key={index}
                className="w-full flex flex-col justify-between bg-black text-white border-0 shadow-none"
              >
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>{elem.title}</CardTitle>
                  <CardTitle>
                    <elem.icon color={elem.color} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <p className="text-4xl font-bold">{elem.number}</p>
                  <p className="font-semibold">
                    <span className={elem.textColor}>1.6%</span> {elem.profit}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-black rounded-lg m-1 p-4">
            <div className="flex justify-between mb-2">
              <h1 className="font-bold">Recent Orders</h1>
              <h1 className="text-blue-700 font-bold">View all</h1>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Search recent orders . . ."
                className="p-2 w-full rounded-sm bg-zinc-700 text-white"
              />
            </div>

            <div className="scrollbar-hidden max-h-[500px] overflow-y-auto pr-2">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-full p-4 mb-2 flex items-center justify-between bg-zinc-900 rounded"
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-600 p-3 rounded-md text-black font-bold">
                      AM
                    </div>
                    <div>
                      <h1>Amrit Raj</h1>
                      <p className="text-sm text-zinc-400">8 items</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 border border-yellow-500 px-2 py-1 rounded text-sm">
                    Table No: 3
                  </div>
                  <div className="text-right text-sm">
                    <h1 className="flex items-center gap-2 text-green-500">
                      <CheckCheck color="green" size={16} /> Ready
                    </h1>
                    <h1 className="flex items-center gap-2 text-green-500">
                      <Circle fill="green" color="green" size={12} /> Ready to serve
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 bg-black rounded-lg hidden lg:block" >
          <div className="flex justify-between items-center p-2">
            <h1 className="text-lg text-white">Polular Dishes</h1>
            <h3 className="text-blue-900 font-bold">View all</h3>
          </div>
          <div className="flex flex-col items-center gap-4 p-2">
            <Card className="w-full max-w-sm bg-zinc-900 text-white shadow-md">
              <CardContent className="flex items-center gap-4 ">
                <Image
                  src=""
                  alt="Butter Chicken"
                  width={48}
                  height={48}
                  className="rounded-full object-cover bg-white"
                />
                <div>
                  <p className="font-semibold">Butter Chicken</p>
                  <p className="text-sm text-zinc-400">
                    Orders: <span className="font-bold text-white">250</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
