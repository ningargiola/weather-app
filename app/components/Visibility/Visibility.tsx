"use client";
import { useGlobalContext } from '@/app/Context/globalContext';
import { eye } from '@/app/utils/icons';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

function Visibility() {
    const { forecast } = useGlobalContext();

    if (!forecast || !forecast?.visibility) {
        return <Skeleton className='h-[12rem] w-full' />
    }

    const { visibility } = forecast;

    const getVisibilityText = (visibility: number) => {
        const visibilityInKm = Math.round(visibility / 1000);

        if(visibilityInKm > 10) {
            return 'Excellent: Clear visibility.';
        }
        if(visibilityInKm >= 5 && visibilityInKm <= 10) {
            return 'Good: Clear visibility.';
        }
        if(visibilityInKm >= 2 && visibilityInKm < 5) {
            return 'Moderate: Hazy visibility.';
        }
        if(visibilityInKm < 2) {
            return 'Poor: Poor visibility.';
        }
    };

  return (
    <div className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none'>
        <div className='top'>
            <h2 className='flex items-center gap-2 font-medium'>
                {eye} Visibility
            </h2>
            <p className='pt-4 text-2xl'>{Math.round(visibility / 1000)} km</p>
        </div>

        <p className='text-sm'>{getVisibilityText(visibility)}</p>
    </div>
  )
}

export default Visibility;