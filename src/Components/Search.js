import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchText,setSearchText]=useState('')
    const handelSearch=(e)=>{
        setSearchText(e.target.value)
        
    }
    useEffect(()=>{
        props.onSearch(searchText)
    },[searchText])
  return (
    <div>
      <input type='text' value={searchText} onChange={handelSearch}/>
    </div>
  )
}

export default Search
