import React from "react";
import SearchForm from './Components/SearchForm';
import Gallery from './Components/Gallery';
import { useState, useEffect } from "react";




const Home = () => {

  let [search, setSearch] = useState('')
  let [data, setData] = useState([])


// useEffect(()=>{

//     const fetchData = async () =>{
//       const response = await fetch(`https://what-the-chef-backend.herokuapp.com/recipe?title=${search}`,{
//         method:'GET',
//         mode:'cors',
//         headers:{
//           "Content-Type" : 'application/json'
//         }
//       })
//       const resData = await response.json()
//       setData(resData.data)
//     }
//     fetchData()
  
  
// },[search])

  const handleSearch = (e, term) => {
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