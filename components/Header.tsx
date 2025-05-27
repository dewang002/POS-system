import React from 'react';

import { UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="w-full shadow-md bg-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Image className='rounded-full' width={40} height={40} src={'/logo.png'} alt='logo' />
            </div>

            <div className='flex gap-4'>
                {
                    UserButton ? <UserButton /> : <>
                            <Link href={'/sign-in'}>
                                <Button>Sign In</Button>
                            </Link>
                            <Link href={'/sign-up'}>
                                <Button>Sign Up</Button>
                            </Link>
                    </>
                }
            </div>
        </header>
    );
};

export default Header;
