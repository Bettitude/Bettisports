"use client"
import React from 'react'
import EachNews from './EachNews'
import { useFetchNewsBreaking } from '@/hooks/PostRequests'
import Loader from '../Loader'

const News = () => {
    const { newsBreaking, isLoading } = useFetchNewsBreaking()
    return (
        <>
            {
                isLoading && !newsBreaking ?
                    <Loader />
                    :
                    <div className='grid grid-cols-4 gap-5'>
                        {/* <div className='row-span-2'>
                            <EachNews item={newsBreaking[0]} />
                        </div> */}
                        {
                            newsBreaking.slice(0,8).map((news: any, i: number) => {
                                return (
                                    <EachNews item={news} />
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default News