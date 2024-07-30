"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { github } from '../utils/icons';
import { ThemeDropdown } from './ThemeDropdown/ThemeDropdown';
import { Search } from 'lucide-react';
import SearchDialog from './SearchDialog/SearchDialog';
import { useGlobalContext } from '../Context/globalContext';
import Image from 'next/image';







function Navbar() {
  const router= useRouter();
  const { state } = useGlobalContext();


  return (
    <div className='w-full py-4 flex items-center justify-between'>
        <div className="left relative">
          <Image src="/assets/logoWhite.png" alt='' width={50} height={50} className='dark:block hidden' />
          <Image src="/assets/logoBlack.png" alt='' width={50} height={50} className='dark:hidden block' />
        </div>
        <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">

            <SearchDialog />
            
            <div className="btn-group flex items-center gap-2">
                <ThemeDropdown />

                <Button className='source-code flex items-center gap-2'
                    onClick= {() => {
                    router.push('https://github.com/ningargiola/weather-app')
                    }}
                >
                {github} Source Code
                </Button>
            </div>
        </div>
    </div>
  )
};

export default Navbar;