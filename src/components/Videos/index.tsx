import React from 'react'
import Line from '../UI/Line'
import EachVideo from './EachVideo'

const VideoComponent = () => {
    return (
        <div className='bg-[#25282B] px-xPadding my-20 py-10'>
            <div className='flex items-center gap-3'>
                <p className='text-white'>VIDEOS</p>
                <Line />
            </div>

            <div className='grid grid-cols-[3fr_1fr] mt-10 gap-5'>
                <div className='relative'>
                    <img src="./img.jpg" alt="" />
                    <div className="overlay" />
                    <div className="details p-10">
                        <p className='text-sm'>March 28, 2024</p>
                        <p className='text-[28px] font-[600]'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    {
                        [1, 2, 3].map((video: any, i: number) => {
                            return (
                                <EachVideo key={i} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoComponent