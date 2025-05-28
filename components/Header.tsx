import React from 'react';

import { UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="w-full shadow-md bg-black bg-opacity-50 backdrop-blur-md border-opacity-20  px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Image className='rounded-full' width={40} height={40} src={'/logo.png'} alt='logo' />
            </div>
            <div className='w-md'>
                <input className='border border-gray-300 bg-white bg-opacity-30 w-full p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300' placeholder='search . . .' />
            </div>
            <div className='flex gap-4'>
                {
                    UserButton ? <UserButton /> : <>
                        <Link href={'/sign-in'}>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">Sign In</Button>
                        </Link>
                        <Link href={'/sign-up'}>
                            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">Sign Up</Button>
                        </Link>
                    </>
                }
            </div>
        </header>
    );
};

export default Header;
