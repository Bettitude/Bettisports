import React from 'react'
import Line from '../UI/Line'
import Each from './Each'

const MoreStories = () => {

    const stories = [
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
            date: "March 28, 2024",
            title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
            date: "March 28, 2024",
            title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
            date: "March 28, 2024",
            title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
            date: "March 28, 2024",
            title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
        }
    ]


    return (
        <div className='flex flex-col gap-5 my-10 px-5 md:px-xPadding'>
            <h1 className='font-[600] uppercase'>More Stories</h1>
            <Line />

            <div className="flex gap-2 md:gap-5 overflow-auto">
                {
                    stories.map((newsItem: any, i: number) => {
                        return (
                            <div className=" bg-secondaryBlue min-w-[75%] md:min-w-min ">
                                <Each item={newsItem} key={i} />
                            </div>
                        )
                    })
                }

                
            </div>

        </div>
    )
}

export default MoreStories