import React, { useState } from 'react'

interface SearchFieldProp{
    onSearch: (city: string)=>void
}

export const SearchField: React.FC<SearchFieldProp> = ({onSearch}) => {
    const [city, setCity] = useState<string>('')
    const handleSearch=()=>{
        onSearch(city);
        setCity('');
    }
  return (
    <>
    <input
    value={city}
    placeholder='Enter your city'
    onChange={e=>setCity(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
    </>
  )
}
