import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../const/Apis';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const dispatch=useDispatch();
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [onSearchBar,setOnSearchBar]=useState(false);
  const searchCache=useSelector(store=>store.search)

  const getApiCall=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API + searchQuery,{mode:'no-cors'});
    const str = await data.text();
    const response = await JSON.parse(str.substring(str.indexOf("["), str.indexOf("])") + 1));
    setSuggestions(response[1].slice(0,10));
    dispatch(
      cacheResults({
        [searchQuery]:response[1].slice(0,10),
      })
    )
  }

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getApiCall();
      }

    },200);
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])


  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className=" h-16 fixed bg-white px-8 w-full  p-3 flex justify-between"> 
    
      <div className="flex cursor-pointer">
        <img className="h-7 w-8"
        onClick={()=>toggleMenuHandler() }
        alt="Hamberger-menu" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />

        <img className="h-7 w-32 pl-3"
        alt="YT" src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
        />

      </div>
      
      <div className='flex'>
        <div className="pl-3 p-1 w-[35rem] border border-gray-500 rounded-l-full "  >
        <input className='pt-1 w-[33vw] pl-1 outline-none'
          type="text" placeholder='Search'
          value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setOnSearchBar(true)}
          onBlur={()=>setOnSearchBar(false)}

        />
        { searchQuery && (
        <button className="absolute top-[14px]  w-[2rem] text-3xl font-light hover:rounded-full hover:bg-gray-200"
         onClick={()=>setSearchQuery("")}>
         X 
        </button>
        )}
        </div>
        <button 
        className="p-1 border border-gray-500 rounded-r-full bg-gray-300 ">
          Search
        </button>
      {onSearchBar && 
      (
      <div className='z-50 fixed top-12  bg-white p-2  pl-2 ml-1  w-[35rem] rounded-lg mt-2 '>
      <ul>
      {suggestions && suggestions.map((suggestions)=>
        <li key={suggestions} 
        className='hover:bg-gray-200  font-semibold font-sans p-1 flex cursor-pointer'
        >
        {
          <img alt='Searched' 
          className='h-5 mt-1 w-8 pr-3'
          src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-history_89998.png'/>
        } 
         {suggestions[0]}
        </li>
      )}
      </ul>
      </div>
      )
      }
      </div>
      <div>
        <img className="h-7 w-7"
        alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGFjsxZCvbMuKnsJHFywAKXzJh6SsPWVsifY_z36wVT9p38WQ3IQPDPDjhFPDyxv6YQY&usqp=CAU"
        />
      </div>
    </div>
  )
}
export default Head