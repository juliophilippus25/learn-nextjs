import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props{
    query:string
}

export default function SectionResult({query}:Props) {
    const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
    var loading = !data && !error

  return (
    <div className='container'>
        <p>Hasil Pencarian: {query}</p>
        <div>
            {loading && 'Loading...'}
            {data && data.items.map((user:any, index:number) => {
                return <ul key={index}>
                    <li><Link href={`/users/${user.login}`}>{user.login}</Link></li>
                    <li><Link href={user.repos_url}>Repository</Link></li>
                    <hr />
                </ul>
            })}
        </div>
    </div>
  )
}
