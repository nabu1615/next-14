import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <div className='bg-blue-500 p-3'>
            <Link className='px-2 py-1 bg-white text-blue-500' href="/">Home</Link>
        </div>
    )
}
