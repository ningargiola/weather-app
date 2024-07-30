"use client";
import { useGlobalContext } from '@/app/Context/globalContext';
import { sun } from '@/app/utils/icons';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'
import { UvProgress } from '../UvProgress/UvProgress';

function UvIndex() {
    const { uvIndex } = useGlobalContext();

    if (!uvIndex || !uvIndex.daily) {
        return <Skeleton className='h-[12rem] w-full' />;
    }

    const {daily} = uvIndex;
    const {uv_index_clear_sky_max, uv_index_max} = daily;

    const uvIndexMax = uv_index_max[0].toFixed(0);

    const uvIndexCategory = (uvIndex: number) => {
        if(uvIndex <= 2) {
            return {
                text: "Low",
                description: "No protection required.",
            };
        } else if (uvIndex <= 5) {
            return {
                text: "Moderate",
                description: "Stay in shade near midday",
            };
        } else if (uvIndex <= 7) {
            return {
                text: "High",
                description: "Protection required.",
            };
        } else if (uvIndex <= 10) {
            return {
                text: "Very High",
                description: "Extra protection required.",
            };
        } else {
            return {
                text: "Extreme",
                description: "Avoid being outside.",
            };
        }
    };

    const marginLeftPercentage = (uvIndexMax / 12) * 100;


  return (
    <div className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none'>
        <div className="top">
            <h2 className="flex items-center gap-2 font-medium">{sun} Uv Index</h2> 
            <div className="pt-4 flex flex-col gap-1">
                <p className='text-2xl'>
                    {uvIndexMax}
                    <span className='text-sm'>
                        ({uvIndexCategory(uvIndexMax).text})
                    </span>
                </p>

                <UvProgress 
                    value={marginLeftPercentage}
                    className='progress'
                    max={12}
                />
                
            </div>
        </div>
        <p className='text-sm'>{uvIndexCategory(uvIndexMax).description}</p>
    </div>
  );
}

export default UvIndex;