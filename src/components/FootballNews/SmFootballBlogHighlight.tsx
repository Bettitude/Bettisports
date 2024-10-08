'use client';
import React from 'react'
import LikeCommentShare from '../UI/LikeCommentShare';
import TimeAgo from 'react-timeago'
import parse from 'html-react-parser'

const SmFootballBlogHighlight = ({item} : any) => {
  const content : string = item?.content;
  return (
    <div className='grid grid-cols-[4fr_1fr] gap-3 py-2'>
        <div className='flex flex-col gap-2'>
            <p className='text-[14px] font-[500]'>
              {item?.title}
            </p>
            <div className="flex items-center text-[12px] justify-between">
                <p>
                  <TimeAgo date={item?.createdAt} />
                </p>
                <p className='!text-[10px] line-clamp-2 parser mb-2'>
                  {parse(`${item?.content}`)}
                  {/* {item?.content} */}
                </p>

                <LikeCommentShare id={item?._id} size={12} />
            </div>
        </div>
        <img src={item?.media} alt="" className='h-full' />
    </div>
  )
}

export default SmFootballBlogHighlight