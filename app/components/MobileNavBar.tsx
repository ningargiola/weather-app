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
import Link from 'next/link';







function MobileNavbar() {
  const router= useRouter();
  const { state } = useGlobalContext();


  return (
    <div className='w-full py-4 flex items-center justify-between'>
        <div className="left relative">
          <Link href='https://nickingargiola.vercel.app'>
            <Image src="/assets/logoWhite.png" alt='' width={50} height={50} className='dark:block hidden' />
            <Image src="/assets/logoBlack.png" alt='' width={50} height={50} className='dark:hidden block' />
          </Link>
        </div>
        <div className="search-container flex shrink-0 gap-2 ">
            
            <div className="btn-group flex items-center gap-2 w-fit">
                <ThemeDropdown />

                <Button className='source-code flex items-center gap-2'
                    onClick= {() => {
                    router.push('https://github.com/ningargiola/weather-app')
                    }}
                >
                {github}
                </Button>
            </div>
        </div>
    </div>
  )
};

export default MobileNavbar;