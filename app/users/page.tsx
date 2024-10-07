"use client"
import React, { useState } from "react";
import SectionResult from "./[slug]/sectionResult";


export default function Users() {
  const [query, setQuery] = useState('')
  const onSearch = (e: any) => {
    e.preventDefault()
    const inputQuery = e.target[0].value;
    setQuery(inputQuery)
  }

  return (
    <div className="px-12">
      <form onSubmit={onSearch} className="flex w-full space-x-3 mt-5">
        <input type="text" placeholder="Search github account..." className="bg-slate-200 px-3 w-full" />
        <button className="bg-blue-400 text-white py-2 px-3 rounded-md hover:bg-blue-600">
          Search
        </button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
