import React from 'react';
import { Home, List, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

const BottomNav = () => {
  return (
    <div className=" w-screen flex flex-col">

      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around items-center h-16 shadow-lg z-10">
          <div className="flex flex-col items-center text-sm">
            <Home size={20} />
            <span>Home</span>
          </div>
          <Link  href={'/order'} className="flex flex-col items-center text-sm">
            <List size={20} />
            <span>Orders</span>
          </Link>
          <div className="flex flex-col items-center text-sm">
            <List size={20} />
            <span>Tables</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <MoreHorizontal size={20} />
            <span>More</span>
          </div>
        </div>

        <button className="fixed bottom-20 right-4 bg-yellow-400 p-4 rounded-full shadow-lg z-20">
          ☁️
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
