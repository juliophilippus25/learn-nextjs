import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import ListItemSearch from '@/components/ListItemSearch'

const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Props {
    query: string
}

export default function SectionResult({ query }: Props) {
    const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
    var loading = !data && !error

    return (
        <div className='mt-5'>
            <p>Results: <strong>{query}</strong></p>
            <div>
                {loading && 'Loading...'}
                {data && data.items.map((user: any, index: number) => {
                    return <ListItemSearch key={index} name={user.login} avatarUrl={user.avatar_url} />
                })}
            </div>
        </div>
    )
}
