"use client"
import React, { useState } from "react";
import SectionResult from "./[slug]/sectionResult";


export default function Users() {
    const [query, setQuery] = useState('')
    const onSearch=(e:any)=>{
        e.preventDefault()
        const inputQuery = e.target[0].value;
        setQuery(inputQuery)
    }

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" placeholder="Search..." />
        <button className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-600">
          Search
        </button>
      </form>
      {query && <SectionResult query={query}/>}
    </div>
  );
}
