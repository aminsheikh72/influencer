import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col bg-black'>
            <div className='w-20 h-20 rounded-full border-l-2 border-red-500 border-t-red-500 animate-spin'/>
        </div>
    )
}

export default Loading
