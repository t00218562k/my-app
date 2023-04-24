'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';

const UserMenu = () => {
    return (
        <div className='relative'> 
            <div className='flex flex-row items-center gap-3'>
                <div 
                    onClick={() => {}} 
                    className='
                        hidden
                        border-[1px]
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                '>
                    Become a host
                </div>
                <div 
                    onClick={() => {}}
                    className='
                        py-4
                        md:py-1
                        md:px-4
                        border-[1px]
                        flex
                        flex-row
                        items-center
                        gap-3   
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                '>
                    <AiOutlineMenu size={20} />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserMenu;