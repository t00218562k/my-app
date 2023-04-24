'use client';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div className='
            borter-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-md
            hover:shadow-lg
            transition
            cursor-pointer
        '>
            <div className='
                flex
                flex-row
                items-center
                justify-between
                text-center 
            '>
                <div className='
                    text-sm
                    font-semibold
                    px-6
                '>
                    Anywhere
                </div>
                <div className='
                    text-sm
                    font-semibold
                    px-6    
                    border-x-[2px]                
                '>
                    Any week
                </div>
                <div className='
                    text-sm
                    pl-6
                    pr-2
                    px-6 
                    flex
                    flex-row
                    items-center
                    gap-3          
                '>
                    <div className='hidden sm:block'>Add item</div>
                    <div className='
                        p-2
                        bg-rose-500
                        rounded-full
                        text-white
                    '>
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;