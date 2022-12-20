import React from "react";
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import { useState, useEffect } from "react";




const Home = () => {

  let [search, setSearch] = useState('')
  let [data, setData] = useState([])


useEffect(()=>{

    const fetchData = async () =>{
      const response = await fetch(`https://what-the-chef-backend.onrender.com/recipe?title=${search}`,{
        headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  }
      })
      const resData = await response.json()
      setData(resData.data)
    }
    fetchData()
  
  
},[search])

  const handleSearch = (e:any, term:any) => {
    e.preventDefault()
    setSearch(term)
}

  return(
      <div className="home">
          <SearchForm handleSearch= {handleSearch}/>
          <Gallery data={data}/>
      </div>
  )
}
export default Home