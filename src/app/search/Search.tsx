'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

const Search = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='p-2' type="text" placeholder='Enter the search term' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg' type="submit">Search</button>
        </form>
    )
}

export default Search;