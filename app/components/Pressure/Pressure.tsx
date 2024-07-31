"use client";
import { useGlobalContext } from '@/app/Context/globalContext';
import { gauge } from '@/app/utils/icons';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

function Pressure() {
    const { forecast } = useGlobalContext();

    if (!forecast || !forecast?.main ||!forecast?.main?.pressure) {
        return <Skeleton className='h-[12rem] w-full' />
    }

    const getPressureText = (pressure: number) => {
        if(pressure < 1000) {
            return 'Low: May cause headaches';
        }
        if(pressure >= 1000 && pressure <= 1013) {
            return 'Normal: Ideal for most people';
        }
        if(pressure > 1013) {
            return 'High: May cause joint pain';
        }

        return "Unavailable: Pressure data not available."
    };

    const { pressure } = forecast?.main;

  return (
    <div className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none'>
        <div className='top'>
            <h2 className='flex items-center gap-2 font-medium'>
                {gauge} Pressure
            </h2>
            <p className='pt-4 text-2xl'>{pressure} hPa</p>
        </div>

        <p className='text-sm'>{getPressureText(pressure)}.</p>
    </div>
  )
}

export default Pressure;